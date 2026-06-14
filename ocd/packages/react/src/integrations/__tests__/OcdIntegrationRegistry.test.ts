import { describe, expect, it } from 'vitest'
import {
    getOcdIntegrationSummary,
    ocdIntegrationCategories,
    ocdIntegrations,
    ocdIntegrationRuntimeLabels,
    ocdIntegrationStatusLabels,
} from '../OcdIntegrationRegistry'

describe('OcdIntegrationRegistry', () => {
    it('defines unique integration ids with valid category, runtime, status, and actions', () => {
        const ids = new Set<string>()

        for (const integration of ocdIntegrations) {
            expect(ids.has(integration.id)).toBe(false)
            ids.add(integration.id)
            expect(ocdIntegrationCategories[integration.category]).toBeTruthy()
            expect(ocdIntegrationRuntimeLabels[integration.runtime]).toBeTruthy()
            expect(ocdIntegrationStatusLabels[integration.status]).toBeTruthy()
            expect(integration.capabilities.length).toBeGreaterThan(0)
            expect(integration.healthChecks.length).toBeGreaterThan(0)
            expect(integration.healthChecks.every((check) => ['backend', 'source-status', 'configuration', 'static'].includes(check.kind))).toBe(true)
            expect(integration.healthChecks.every((check) => check.label.length > 0 && typeof check.required === 'boolean')).toBe(true)
            expect(integration.healthChecks.every((check) => check.kind !== 'source-status' || Boolean(integration.sourceKey))).toBe(true)
            expect(integration.actions.length).toBeGreaterThan(0)
            expect(integration.actions.every((action) => ['navigate', 'external-link', 'update-source'].includes(action.kind))).toBe(true)
            expect(integration.actions.every((action) => {
                if (action.kind === 'navigate') return Boolean(action.displayPage)
                if (action.kind === 'external-link') return Boolean(action.href)
                return Boolean(integration.sourceKey)
            })).toBe(true)
        }
    })

    it('summarises integration posture for dashboard counters', () => {
        expect(getOcdIntegrationSummary()).toEqual({
            total: ocdIntegrations.length,
            configured: ocdIntegrations.filter((integration) => integration.status === 'configured').length,
            needsConfig: ocdIntegrations.filter((integration) => integration.status === 'needs-config').length,
            localBackend: ocdIntegrations.filter((integration) => integration.runtime === 'local-backend').length,
        })
    })
})
