/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { describe, it, expect } from 'vitest'
import * as AwsModelResources from '../resources.js'

describe('AwsModelResources namespaces', () => {
    it('exposes all 5 self-contained AWS resource namespaces', () => {
        expect(AwsModelResources.AwsVpc).toBeDefined()
        expect(AwsModelResources.AwsSubnet).toBeDefined()
        expect(AwsModelResources.AwsInternetGateway).toBeDefined()
        expect(AwsModelResources.AwsSecurityGroup).toBeDefined()
        expect(AwsModelResources.AwsInstance).toBeDefined()
    })
})

describe('AwsVpc.newResource', () => {
    it('returns an aws-provider resource with an id and cidrBlock field', () => {
        const vpc = AwsModelResources.AwsVpc.newResource()
        expect(vpc.provider).toBe('aws')
        expect(vpc.id).not.toBe('')
        expect(vpc.cidrBlock).toBe('')
        expect(vpc.resourceType).toBe('Vpc')
    })
})

describe('AwsSubnet.newResource', () => {
    it('returns an aws-provider resource with vpcId and cidrBlock fields', () => {
        const subnet = AwsModelResources.AwsSubnet.newResource()
        expect(subnet.provider).toBe('aws')
        expect(subnet.id).not.toBe('')
        expect(subnet.vpcId).toBe('')
        expect(subnet.cidrBlock).toBe('')
    })
})

describe('AwsInternetGateway.newResource', () => {
    it('returns an aws-provider resource with a vpcId field', () => {
        const igw = AwsModelResources.AwsInternetGateway.newResource()
        expect(igw.provider).toBe('aws')
        expect(igw.id).not.toBe('')
        expect(igw.vpcId).toBe('')
    })
})

describe('AwsSecurityGroup.newResource', () => {
    it('returns an aws-provider resource with vpcId and description fields', () => {
        const sg = AwsModelResources.AwsSecurityGroup.newResource()
        expect(sg.provider).toBe('aws')
        expect(sg.id).not.toBe('')
        expect(sg.vpcId).toBe('')
        expect(typeof sg.description).toBe('string')
    })
})

describe('AwsInstance.newResource', () => {
    it('returns an aws-provider resource with subnetId, ami and a default instanceType', () => {
        const instance = AwsModelResources.AwsInstance.newResource()
        expect(instance.provider).toBe('aws')
        expect(instance.id).not.toBe('')
        expect(instance.subnetId).toBe('')
        expect(instance.ami).toBe('')
        expect(instance.instanceType).toBe('t3.micro')
    })
})

describe('AwsVpc.newResource uniqueness', () => {
    it('assigns a unique id per resource', () => {
        const a = AwsModelResources.AwsVpc.newResource()
        const b = AwsModelResources.AwsVpc.newResource()
        expect(a.id).not.toBe(b.id)
    })
})
