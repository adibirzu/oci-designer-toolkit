/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { resourcemanager } from "oci-sdk"
import { OciCommonQuery } from './OciQueryCommon.js'

interface OutputDataStringArray extends Record<string, string[]> {}

const crcTable = (() => {
    const table: number[] = []
    for (let i = 0; i < 256; i += 1) {
        let c = i
        for (let j = 0; j < 8; j += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
        table[i] = c >>> 0
    }
    return table
})()

export class OciResourceManagerQuery extends OciCommonQuery {
    // Clients
    resourcemanagerClient: resourcemanager.ResourceManagerClient
    constructor(profile: string='DEFAULT', region?: string) {
        super(profile, region)
        console.debug('OciResourceManagerQuery: Region', region)
        this.resourcemanagerClient = new resourcemanager.ResourceManagerClient(this.authenticationConfiguration, this.clientConfiguration)
    }

    query(compartmentIds: string[]): Promise<any> {
        console.debug('OciResourceManagerQuery: query')
        return new Promise((resolve, reject) => {
            const resourceManagerData: Record<string, any[]> = {}
            const listStacks = this.listStacks(compartmentIds)
            const queries = [
                listStacks
            ]
            Promise.allSettled(queries).then((results) => {
                // Stacks
                // @ts-ignore
                if (results[queries.indexOf(listStacks)].status === 'fulfilled' && results[queries.indexOf(listStacks)].value.length > 0) resourceManagerData.stacks = results[queries.indexOf(listStacks)].value

                resolve(resourceManagerData)
            }).catch((reason) => {
                console.error(reason)
                reject(new Error(reason))
            })
        })
    }

    listStacks(compartmentIds: string[], retryCount: number = 0): Promise<any> {
        return new Promise((resolve, reject) => {
            const requests: resourcemanager.requests.ListStacksRequest[] = compartmentIds.map((id) => {return {compartmentId: id}})
            const queries = requests.map((r) => this.resourcemanagerClient.listStacks(r))
            Promise.allSettled(queries).then((results) => {
                console.debug('OciResourceManagerQuery: listStacks: All Settled')
                //@ts-ignore
                const resources = results.filter((r) => r.status === 'fulfilled').reduce((a, c) => [...a, ...c.value.items], [])
                resolve(resources)
            }).catch((reason) => {
                console.error('OciResourceManagerQuery: listStacks:', reason)
                reject(new Error(reason))
            })
        })
    }

    createStack(compartmentId: string, displayName: string, data: OutputDataStringArray, apply: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {
            const stackName = this.normaliseStackName(displayName)
            const createStackDetails: any = {
                compartmentId,
                displayName: stackName,
                description: 'Created by OKIT Open Cloud Designer Resource Manager export.',
                configSource: this.zipUploadConfigSource(data),
                freeformTags: {
                    ManagedBy: 'okit-open-cloud-designer',
                },
            }
            this.resourcemanagerClient.createStack({createStackDetails}).then((response) => {
                const stack = response.stack
                if (!stack || !stack.id) resolve({stack})
                else this.createJob(stack.id, apply).then((job) => resolve({stack, job})).catch((reason) => reject(reason))
            }).catch((reason) => {
                console.error('OciResourceManagerQuery: createStack:', reason)
                reject(new Error(`${reason}`))
            })
        })
    }

    updateStack(stackId: string, data: OutputDataStringArray, apply: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {
            const updateStackDetails: any = {
                configSource: this.zipUploadConfigSource(data),
                freeformTags: {
                    ManagedBy: 'okit-open-cloud-designer',
                },
            }
            this.resourcemanagerClient.updateStack({stackId, updateStackDetails}).then((response) => {
                this.createJob(stackId, apply).then((job) => resolve({stack: response.stack, job})).catch((reason) => reject(reason))
            }).catch((reason) => {
                console.error('OciResourceManagerQuery: updateStack:', reason)
                reject(new Error(`${reason}`))
            })
        })
    }

    createJob(stackId: string, apply: boolean = false): Promise<any> {
        return new Promise((resolve, reject) => {
            const operation = apply ? 'APPLY' : 'PLAN'
            const createJobDetails: any = {
                stackId,
                displayName: `OKIT ${operation.toLowerCase()} ${new Date().toISOString()}`,
                operation,
                jobOperationDetails: apply
                    ? {operation, executionPlanStrategy: 'AUTO_APPROVED'}
                    : {operation},
                freeformTags: {
                    ManagedBy: 'okit-open-cloud-designer',
                },
            }
            this.resourcemanagerClient.createJob({createJobDetails}).then((response) => {
                resolve(response.job)
            }).catch((reason) => {
                console.error('OciResourceManagerQuery: createJob:', reason)
                reject(new Error(`${reason}`))
            })
        })
    }

    zipUploadConfigSource(data: OutputDataStringArray): any {
        return {
            configSourceType: 'ZIP_UPLOAD',
            zipFileBase64Encoded: this.buildZipBase64(this.withResourceManagerManifest(data)),
        }
    }

    withResourceManagerManifest(data: OutputDataStringArray): OutputDataStringArray {
        const fileNames = Object.keys(data).toSorted()
        const manifest = {
            schemaVersion: 'oci.okit.resource_manager_export.v1',
            generatedBy: 'OKIT Open Cloud Designer',
            fileCount: fileNames.length,
            files: fileNames,
        }
        return {
            ...data,
            'okit-resource-manager-manifest.json': [JSON.stringify(manifest, null, 2)],
            'README_RESOURCE_MANAGER.md': [
                '# OKIT Resource Manager Export',
                '',
                'This package was generated by OKIT Open Cloud Designer for OCI Resource Manager.',
                'Review variables and generated resources before running apply jobs.',
            ],
        }
    }

    buildZipBase64(data: OutputDataStringArray): string {
        const entries = Object.entries(data)
            .filter(([name]) => name.trim() !== '')
            .map(([name, lines]) => {
                const safeName = name.replace(/^\/+/, '').replace(/\\/g, '/')
                const body = `${lines.join('\n')}\n`
                return {name: safeName, data: Buffer.from(body, 'utf8')}
            })
        let offset = 0
        const localParts: Buffer[] = []
        const centralParts: Buffer[] = []
        entries.forEach((entry) => {
            const filename = Buffer.from(entry.name, 'utf8')
            const crc = this.crc32(entry.data)
            const localHeader = Buffer.alloc(30)
            localHeader.writeUInt32LE(0x04034b50, 0)
            localHeader.writeUInt16LE(20, 4)
            localHeader.writeUInt16LE(0x0800, 6)
            localHeader.writeUInt16LE(0, 8)
            localHeader.writeUInt16LE(0, 10)
            localHeader.writeUInt16LE(0, 12)
            localHeader.writeUInt32LE(crc, 14)
            localHeader.writeUInt32LE(entry.data.length, 18)
            localHeader.writeUInt32LE(entry.data.length, 22)
            localHeader.writeUInt16LE(filename.length, 26)
            localHeader.writeUInt16LE(0, 28)
            localParts.push(localHeader, filename, entry.data)

            const centralHeader = Buffer.alloc(46)
            centralHeader.writeUInt32LE(0x02014b50, 0)
            centralHeader.writeUInt16LE(20, 4)
            centralHeader.writeUInt16LE(20, 6)
            centralHeader.writeUInt16LE(0x0800, 8)
            centralHeader.writeUInt16LE(0, 10)
            centralHeader.writeUInt16LE(0, 12)
            centralHeader.writeUInt16LE(0, 14)
            centralHeader.writeUInt32LE(crc, 16)
            centralHeader.writeUInt32LE(entry.data.length, 20)
            centralHeader.writeUInt32LE(entry.data.length, 24)
            centralHeader.writeUInt16LE(filename.length, 28)
            centralHeader.writeUInt16LE(0, 30)
            centralHeader.writeUInt16LE(0, 32)
            centralHeader.writeUInt16LE(0, 34)
            centralHeader.writeUInt16LE(0, 36)
            centralHeader.writeUInt32LE(0, 38)
            centralHeader.writeUInt32LE(offset, 42)
            centralParts.push(centralHeader, filename)
            offset += localHeader.length + filename.length + entry.data.length
        })
        const centralDirectory = Buffer.concat(centralParts)
        const localDirectory = Buffer.concat(localParts)
        const endOfCentralDirectory = Buffer.alloc(22)
        endOfCentralDirectory.writeUInt32LE(0x06054b50, 0)
        endOfCentralDirectory.writeUInt16LE(0, 4)
        endOfCentralDirectory.writeUInt16LE(0, 6)
        endOfCentralDirectory.writeUInt16LE(entries.length, 8)
        endOfCentralDirectory.writeUInt16LE(entries.length, 10)
        endOfCentralDirectory.writeUInt32LE(centralDirectory.length, 12)
        endOfCentralDirectory.writeUInt32LE(localDirectory.length, 16)
        endOfCentralDirectory.writeUInt16LE(0, 20)
        return Buffer.concat([localDirectory, centralDirectory, endOfCentralDirectory]).toString('base64')
    }

    crc32(data: Buffer): number {
        let crc = 0xffffffff
        for (const byte of data) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8)
        return (crc ^ 0xffffffff) >>> 0
    }

    normaliseStackName(displayName: string): string {
        const trimmed = displayName.trim()
        return trimmed.length > 0 ? trimmed : `okit-stack-${new Date().toISOString().replace(/[:.]/g, '-')}`
    }
}

export default OciResourceManagerQuery
// module.exports = { OciResourceManager }
