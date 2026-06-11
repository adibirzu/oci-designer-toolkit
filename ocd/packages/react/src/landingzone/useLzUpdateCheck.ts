/*
** Copyright (c) 2021, Andrew Hopkinson.
** Licensed under the GNU GENERAL PUBLIC LICENSE v 3.0 as shown at https://www.gnu.org/licenses/.
*/

/*
** React hook wrapping the OCI Landing Zone update check. Runs the (cached) check
** on mount and exposes a refresh(force) action for the Sources & Updates panel.
** The underlying service never throws, so the hook surfaces results, a loading
** flag, and an aggregate `anyUpdate` derived from the per-source statuses.
*/

import { useCallback, useEffect, useState } from 'react'
import { LzSource } from './OcdLzSources'
import { LzUpdateStatus, checkLzUpdates } from './OcdLzUpdateCheck'

export interface UseLzUpdateCheck {
    statuses: LzUpdateStatus[]
    loading: boolean
    /** True only if the whole check failed to run (per-source errors live on each status). */
    error: string | null
    /** True when at least one pinned source has an update available. */
    anyUpdate: boolean
    refresh: (force?: boolean) => void
}

export function useLzUpdateCheck(sources?: LzSource[]): UseLzUpdateCheck {
    const [statuses, setStatuses] = useState<LzUpdateStatus[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const load = useCallback(
        async (force: boolean, cancelledRef?: { current: boolean }) => {
            setLoading(true)
            setError(null)
            try {
                const result = await checkLzUpdates(sources, { force })
                if (cancelledRef?.current) return
                setStatuses(result)
            } catch (err: unknown) {
                // checkLzUpdates is defensive, but guard anyway so the hook never crashes.
                if (cancelledRef?.current) return
                setError(err instanceof Error ? err.message : 'Update check unavailable.')
            } finally {
                if (!cancelledRef?.current) setLoading(false)
            }
        },
        [sources],
    )

    useEffect(() => {
        const cancelledRef = { current: false }
        void load(false, cancelledRef)
        return () => {
            cancelledRef.current = true
        }
    }, [load])

    const refresh = useCallback(
        (force = true) => {
            void load(force)
        },
        [load],
    )

    const anyUpdate = statuses.some((status) => status.updateAvailable)

    return { statuses, loading, error, anyUpdate, refresh }
}
