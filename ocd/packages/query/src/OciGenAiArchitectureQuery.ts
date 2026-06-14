/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { generativeaiinference } from 'oci-sdk'
import { OciCommonQuery } from './OciQueryCommon.js'

export interface OciGenAiArchitectureRequest {
    profile: string
    region: string
    compartmentId: string
    modelId: string
    prompt: string
    temperature?: number
    maxTokens?: number
}

export interface OciGenAiArchitectureResponse {
    text: string
    modelId?: string
    modelVersion?: string
    opcRequestId?: string
}

export interface OciGenAiChatClient {
    chat(request: generativeaiinference.requests.ChatRequest): Promise<generativeaiinference.responses.ChatResponse | ReadableStream<Uint8Array> | null>
}

export type OciGenAiChatClientFactory = (query: OciGenAiArchitectureQuery) => OciGenAiChatClient

const MAX_PROMPT_CHARS = 16000
const DEFAULT_MAX_TOKENS = 2400
const DEFAULT_TEMPERATURE = 0.2
const GENAI_TIMEOUT_MS = 60000

const SENSITIVE_PATTERNS: ReadonlyArray<[RegExp, string]> = [
    [/\bocid1\.[a-z0-9_-]+\.oc1(?:\.[a-z0-9_-]+)?\.[a-z0-9._-]+\b/gi, '<OCI_OCID>'],
    [/\b(?:api|secret|private|access)[_-]?key\s*[:=]\s*[^\s,;]+/gi, '<SECRET_VALUE>'],
    [/\bfingerprint\s*[:=]\s*(?:[a-f0-9]{2}:){8,}[a-f0-9]{2}\b/gi, '<KEY_FINGERPRINT>'],
    [/\b(?:130\.61|161\.153|144\.24|129\.153|141\.147|82\.77|109\.166)\.\d{1,3}\.\d{1,3}\b/g, '<PUBLIC_IP>'],
    [/\b(?:10\.42|10\.0\.10)\.\d{1,3}\.\d{1,3}\b/g, '<PRIVATE_IP>'],
]

const clampNumber = (value: number | undefined, fallback: number, min: number, max: number): number => {
    if (value === undefined || !Number.isFinite(value)) return fallback
    return Math.min(max, Math.max(min, value))
}

const requireNonEmpty = (value: string, label: string): string => {
    const trimmed = value.trim()
    if (!trimmed) throw new Error(`${label} is required.`)
    return trimmed
}

export const redactArchitecturePrompt = (prompt: string): string =>
    SENSITIVE_PATTERNS.reduce((current, [pattern, replacement]) => current.replace(pattern, replacement), prompt)

export const validateGenAiArchitectureRequest = (request: OciGenAiArchitectureRequest): OciGenAiArchitectureRequest => {
    const profile = requireNonEmpty(request.profile, 'OCI profile')
    const region = requireNonEmpty(request.region, 'OCI region')
    const compartmentId = requireNonEmpty(request.compartmentId, 'OCI GenAI compartment')
    const modelId = requireNonEmpty(request.modelId, 'OCI GenAI model')
    const prompt = requireNonEmpty(request.prompt, 'Architecture prompt')
    if (prompt.length > MAX_PROMPT_CHARS) throw new Error(`Architecture prompt is too large; maximum is ${MAX_PROMPT_CHARS} characters.`)
    return {
        profile,
        region,
        compartmentId,
        modelId,
        prompt,
        temperature: clampNumber(request.temperature, DEFAULT_TEMPERATURE, 0, 1),
        maxTokens: Math.round(clampNumber(request.maxTokens, DEFAULT_MAX_TOKENS, 256, 4000)),
    }
}

export const buildGenAiArchitectureChatRequest = (request: OciGenAiArchitectureRequest): generativeaiinference.requests.ChatRequest => {
    const validated = validateGenAiArchitectureRequest(request)
    return {
        chatDetails: {
            compartmentId: validated.compartmentId,
            servingMode: {
                servingType: generativeaiinference.models.OnDemandServingMode.servingType,
                modelId: validated.modelId,
            },
            chatRequest: {
                apiFormat: generativeaiinference.models.GenericChatRequest.apiFormat,
                isStream: false,
                maxTokens: validated.maxTokens,
                temperature: validated.temperature,
                responseFormat: {
                    type: generativeaiinference.models.JsonObjectResponseFormat.type,
                },
                messages: [{
                    role: generativeaiinference.models.UserMessage.role,
                    content: [{
                        type: generativeaiinference.models.TextContent.type,
                        text: redactArchitecturePrompt(validated.prompt),
                    } as generativeaiinference.models.TextContent],
                }],
            },
        },
    }
}

const textFromContent = (content: unknown): string => {
    if (typeof content === 'string') return content
    if (!Array.isArray(content)) return ''
    return content
        .map((item) => {
            if (!item || typeof item !== 'object') return ''
            const text = (item as { text?: unknown }).text
            return typeof text === 'string' ? text : ''
        })
        .filter((value) => value.trim() !== '')
        .join('\n')
}

export const extractGenAiArchitectureText = (response: generativeaiinference.responses.ChatResponse | null): OciGenAiArchitectureResponse => {
    const result = response?.chatResult
    const chatResponse = result?.chatResponse as { text?: unknown; choices?: Array<{ message?: { content?: unknown } }> } | undefined
    const text = typeof chatResponse?.text === 'string'
        ? chatResponse.text
        : textFromContent(chatResponse?.choices?.[0]?.message?.content)
    if (!text.trim()) throw new Error('OCI GenAI response did not include architecture plan content.')
    return {
        text,
        modelId: result?.modelId,
        modelVersion: result?.modelVersion,
        opcRequestId: response?.opcRequestId,
    }
}

export class OciGenAiArchitectureQuery extends OciCommonQuery {
    genAiClient: OciGenAiChatClient

    constructor(profile: string = 'DEFAULT', region?: string, clientFactory?: OciGenAiChatClientFactory) {
        super(profile, region)
        this.genAiClient = clientFactory
            ? clientFactory(this)
            : new generativeaiinference.GenerativeAiInferenceClient(this.authenticationConfiguration, this.clientConfiguration)
    }

    generateArchitecturePlan(request: OciGenAiArchitectureRequest): Promise<OciGenAiArchitectureResponse> {
        const chatRequest = buildGenAiArchitectureChatRequest(request)
        return this.withTimeout(this.genAiClient.chat(chatRequest), 'generateArchitecturePlan', GENAI_TIMEOUT_MS)
            .then((response) => {
                if (response instanceof ReadableStream) throw new Error('OCI GenAI streaming responses are not supported for architecture planning.')
                return extractGenAiArchitectureText(response)
            })
    }
}
