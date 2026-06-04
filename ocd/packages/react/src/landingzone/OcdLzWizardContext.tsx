/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** TypeScript port of the LZNG `wizardContext.jsx`. Minimal wizard state shell;
** steps own their own sub-keys under `data`. Persists to localStorage on every
** change under `ocd.lz.wizard.draft`.
*/

import React, { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const STORAGE_KEY = 'ocd.lz.wizard.draft'

export interface WizardState {
    data: Record<string, unknown>
}

export interface AnchorRequest {
    key: string
    ts: number
}

export interface WizardContextValue {
    data: Record<string, unknown>
    setField: (path: string, value: unknown) => void
    reset: () => void
    anchorRequest: AnchorRequest | null
    setAnchorRequest: (key: string) => void
}

type WizardAction =
    | { type: 'HYDRATE'; payload: WizardState | null }
    | { type: 'SET_FIELD'; path: string; value: unknown }
    | { type: 'RESET' }

export function defaultWizardState(): WizardState {
    return { data: {} }
}

function setNested(obj: Record<string, unknown>, path: string, value: unknown): Record<string, unknown> {
    const keys = path.split('.')
    const last = keys.pop() as string
    const clone: Record<string, unknown> = { ...obj }
    let cursor = clone
    for (const k of keys) {
        cursor[k] = { ...(cursor[k] as Record<string, unknown>) }
        cursor = cursor[k] as Record<string, unknown>
    }
    cursor[last] = value
    return clone
}

function reducer(state: WizardState, action: WizardAction): WizardState {
    switch (action.type) {
        case 'HYDRATE':
            return action.payload || state
        case 'SET_FIELD':
            return { ...state, data: setNested(state.data, action.path, action.value) }
        case 'RESET':
            return defaultWizardState()
        default:
            return state
    }
}

const WizardContext = createContext<WizardContextValue | null>(null)

interface WizardProviderProps {
    children: React.ReactNode
}

export function WizardProvider({ children }: WizardProviderProps): JSX.Element {
    const [state, dispatch] = useReducer(reducer, undefined, defaultWizardState)
    const [anchorRequest, internalSetAnchorRequest] = useState<AnchorRequest | null>(null)

    // Hydrate from localStorage on mount.
    useEffect(() => {
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY)
            if (raw) dispatch({ type: 'HYDRATE', payload: JSON.parse(raw) as WizardState })
        } catch {
            /* ignore parse failure */
        }
    }, [])

    // Persist every state change.
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        } catch {
            /* ignore quota */
        }
    }, [state])

    const setAnchorRequest = useCallback((key: string) => internalSetAnchorRequest({ key, ts: Date.now() }), [])

    const value = useMemo<WizardContextValue>(() => ({
        data: state.data,
        setField: (path: string, val: unknown) => dispatch({ type: 'SET_FIELD', path, value: val }),
        reset: () => dispatch({ type: 'RESET' }),
        anchorRequest,
        setAnchorRequest,
    }), [state, anchorRequest, setAnchorRequest])

    return <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
}

export function useWizard(): WizardContextValue {
    const ctx = useContext(WizardContext)
    if (!ctx) throw new Error('useWizard must be used within WizardProvider')
    return ctx
}

export const WIZARD_STORAGE_KEY = STORAGE_KEY
