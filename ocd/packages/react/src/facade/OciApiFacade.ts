/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OutputDataStringArray } from "@ocd/export"
import { getOciPriceList as fetchOciPriceList, PriceMap } from "@ocd/query/pricing"

/*
** Facade exists so we can switch between Electron based and Web based which will require a web server
*/

/*
** Web (browser) fallback for OCI discovery. The browser cannot read ~/.oci/config nor call
** the OCI SDK (CORS), so when there is no Electron bridge (window.ocdAPI) we call the local
** read-only backend (@ocd/web-server) over the dev-server proxy mount at '/api/oci'
** (see vite.renderer.config.mts). The backend reuses @ocd/query server-side and returns a
** { success, data?, error? } envelope. The Electron path is unchanged.
*/
const OCI_API_BASE_URL = '/api/oci'

interface OcdWebServerResponse<T> {
    success: boolean
    data?: T
    error?: string
}

const unwrap = async <T>(response: Response): Promise<T> => {
    let body: OcdWebServerResponse<T>
    try {
        body = (await response.json()) as OcdWebServerResponse<T>
    } catch {
        throw new Error(`OCD web backend returned a non-JSON response (HTTP ${response.status})`)
    }
    if (!body.success) throw new Error(body.error ?? `OCD web backend request failed (HTTP ${response.status})`)
    return body.data as T
}

const webGet = async <T>(path: string): Promise<T> => {
    const response = await fetch(`${OCI_API_BASE_URL}${path}`)
    return unwrap<T>(response)
}

const webPost = async <T>(path: string, payload: Record<string, unknown>): Promise<T> => {
    const response = await fetch(`${OCI_API_BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    return unwrap<T>(response)
}

export namespace OciApiFacade {
    export const getVersion = (): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.getVersion() : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const loadOCIConfigProfileNames = (): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.loadOCIConfigProfileNames()
        // Backend returns { profiles: string[] }; the dialog expects a string[].
        return webGet<{ profiles: string[] }>('/profiles').then((result) => result.profiles)
    }
    export const loadOCIConfigProfile = (profile: string = 'shipped'): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.loadOCIConfigProfile(profile)
        return webGet<Record<string, string>>(`/profile?profile=${encodeURIComponent(profile)}`)
    }
    export const listRegions = (profile: string = 'DEFAULT'): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.listRegions(profile)
        return webGet<any>(`/regions?profile=${encodeURIComponent(profile)}`)
    }
    export const listTenancyCompartments = (profile: string = 'DEFAULT'): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.listTenancyCompartments(profile)
        return webGet<any>(`/compartments?profile=${encodeURIComponent(profile)}`)
    }
    export const queryTenancy = (profile: string = 'DEFAULT', compartmentIds: string[] = [], region: string = 'uk-london-1'): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.queryTenancy(profile, compartmentIds, region)
        return webPost<any>('/query', { profile, region, compartmentIds })
    }
    export const queryDropdown = (profile: string = 'DEFAULT', region: string = 'uk-london-1'): Promise<any> => {
        if (window.ocdAPI) return window.ocdAPI.queryDropdown(profile, region)
        return webPost<any>('/dropdown', { profile, region })
    }
    export const listStacks = (profile: string = 'DEFAULT', region: string = 'uk-london-1', compartmentId: string = ''): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.listStacks(profile, region, compartmentId) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const createStack = (profile: string = 'DEFAULT', region: string = 'uk-london-1', compartmentId: string = '', stackName: string = '', data: OutputDataStringArray = {}, apply: boolean = false): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.createStack(profile, region, compartmentId, stackName, data, apply) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const updateStack = (profile: string = 'DEFAULT', region: string = 'uk-london-1', stackId: string = '', data: OutputDataStringArray = {}, apply: boolean = false): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.updateStack(profile, region, stackId, data, apply) : Promise.reject(new Error('Currently Not Implemented'))
    }
    export const createJob = (profile: string = 'DEFAULT', region: string = 'uk-london-1', stackId: string = '', apply: boolean = false): Promise<any> => {
        return window.ocdAPI ? window.ocdAPI.createJob(profile, region, stackId, apply) : Promise.reject(new Error('Currently Not Implemented'))
    }
    /*
    ** OCI list-pricing lookup. Desktop routes through the Electron main process
    ** (no CORS, 24h disk cache). Web has no Electron bridge, so it fetches via
    ** the vite dev `server.proxy` mount at '/api/pricing' (see
    ** vite.renderer.config.mts). For a production web deployment, host an
    ** equivalent reverse proxy that forwards '/api/pricing' to
    ** https://apexapps.oracle.com/pls/apex/cetools/api/v1/products.
    */
    export const getOciPriceList = (partNumbers: string[] = [], currency: string = 'USD'): Promise<PriceMap> => {
        return window.ocdAPI
            ? window.ocdAPI.getOciPriceList(partNumbers, currency)
            : fetchOciPriceList(partNumbers, currency, { baseUrl: '/api/pricing' })
    }
}
