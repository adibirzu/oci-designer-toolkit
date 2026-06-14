/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { describe, expect, it } from 'vitest'
import {
    buildGenAiArchitectureChatRequest,
    extractGenAiArchitectureText,
    redactArchitecturePrompt,
    validateGenAiArchitectureRequest,
} from '../../../../query/src/OciGenAiArchitectureQuery'

describe('OciGenAiArchitectureQuery helpers', () => {
    it('redacts OCI identifiers, key material labels, and sensitive topology before inference', () => {
        const ocid = ['ocid1', 'compartment', 'oc1', '', 'exampleuniquevalue'].join('.')
        const publicIp = ['130', '61', '2', '3'].join('.')
        const privateIp = ['10', '42', '1', '10'].join('.')
        const prompt = [
            `Use ${ocid}`,
            'api_key=super-secret-value',
            'fingerprint=aa:bb:cc:dd:ee:ff:00:11:22:33',
            `connect ${privateIp} to ${publicIp}`,
        ].join('\n')

        const redacted = redactArchitecturePrompt(prompt)

        expect(redacted).toContain('<OCI_OCID>')
        expect(redacted).toContain('<SECRET_VALUE>')
        expect(redacted).toContain('<KEY_FINGERPRINT>')
        expect(redacted).toContain('<PRIVATE_IP>')
        expect(redacted).toContain('<PUBLIC_IP>')
        expect(redacted).not.toContain(ocid)
        expect(redacted).not.toContain('super-secret-value')
    })

    it('builds a bounded JSON-mode on-demand chat request', () => {
        const request = buildGenAiArchitectureChatRequest({
            profile: 'DEFAULT',
            region: 'eu-frankfurt-1',
            compartmentId: '<GENAI_COMPARTMENT_ID>',
            modelId: 'cohere.command-a-03-2025',
            prompt: 'Create an OCI hub and spoke network.',
            temperature: 9,
            maxTokens: 99999,
        })

        expect(request.chatDetails.compartmentId).toBe('<GENAI_COMPARTMENT_ID>')
        expect(request.chatDetails.servingMode).toMatchObject({
            servingType: 'ON_DEMAND',
            modelId: 'cohere.command-a-03-2025',
        })
        expect(request.chatDetails.chatRequest).toMatchObject({
            apiFormat: 'GENERIC',
            isStream: false,
            maxTokens: 4000,
            temperature: 1,
            responseFormat: { type: 'JSON_OBJECT' },
        })
    })

    it('requires explicit profile, region, compartment, model, and prompt', () => {
        expect(() => validateGenAiArchitectureRequest({
            profile: '',
            region: 'eu-frankfurt-1',
            compartmentId: '<GENAI_COMPARTMENT_ID>',
            modelId: 'cohere.command-a-03-2025',
            prompt: 'Create a VCN.',
        })).toThrow('OCI profile is required.')
    })

    it('extracts text from generic chat choices', () => {
        const result = extractGenAiArchitectureText({
            opcRequestId: 'request-1',
            etag: '',
            modelDeprecationInfo: '',
            chatResult: {
                modelId: 'cohere.command-a-03-2025',
                modelVersion: '1',
                chatResponse: {
                    apiFormat: 'GENERIC',
                    timeCreated: new Date('2026-06-12T00:00:00.000Z'),
                    choices: [{
                        index: 0,
                        finishReason: 'stop',
                        message: {
                            role: 'ASSISTANT',
                            content: [{ type: 'TEXT', text: '{"title":"Plan"}' }],
                        },
                    }],
                },
            },
        })

        expect(result).toEqual({
            text: '{"title":"Plan"}',
            modelId: 'cohere.command-a-03-2025',
            modelVersion: '1',
            opcRequestId: 'request-1',
        })
    })
})
