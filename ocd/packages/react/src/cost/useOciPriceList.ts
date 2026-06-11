/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

/*
** React hook that resolves a usable PriceMap for the requested part numbers and
** currency. Always resolves: live prices (Electron main / web proxy via the
** facade) are merged over the bundled offline snapshot. If the live fetch
** rejects or returns nothing usable, the snapshot is used and an error string
** is surfaced (the snapshot fallback never silently swallows the failure).
*/

import { useEffect, useMemo, useState } from 'react'
import type { PriceMap } from '@ocd/query/pricing'
import { OciApiFacade } from '../facade/OciApiFacade'
import { getSnapshotPriceMap } from '../data/OciPriceListSnapshot'

export type PriceListSource = 'live' | 'snapshot'

export interface UseOciPriceListResult {
    priceMap: PriceMap
    loading: boolean
    error: string | null
    source: PriceListSource
}

export function useOciPriceList(partNumbers: string[], currency: string): UseOciPriceListResult {
    const snapshot = useMemo<PriceMap>(() => getSnapshotPriceMap(currency), [currency])
    // Stable key so the effect only re-runs when the actual parts/currency change.
    const partsKey = useMemo(() => Array.from(new Set(partNumbers)).sort().join(','), [partNumbers])

    const [priceMap, setPriceMap] = useState<PriceMap>(snapshot)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [source, setSource] = useState<PriceListSource>('snapshot')

    useEffect(() => {
        let cancelled = false
        const parts = partsKey.length > 0 ? partsKey.split(',') : []

        // Seed with the snapshot immediately so the UI always has data.
        setPriceMap(snapshot)
        setSource('snapshot')
        setLoading(true)
        setError(null)

        if (parts.length === 0) {
            setLoading(false)
            return () => {
                cancelled = true
            }
        }

        OciApiFacade.getOciPriceList(parts, currency)
            .then((live: PriceMap) => {
                if (cancelled) return
                const hasLive = live && Object.keys(live).length > 0
                if (hasLive) {
                    setPriceMap({ ...snapshot, ...live })
                    setSource('live')
                    setError(null)
                } else {
                    // No live data came back; keep snapshot and note it.
                    setPriceMap(snapshot)
                    setSource('snapshot')
                    setError('Live pricing returned no data; using bundled snapshot.')
                }
            })
            .catch((err: unknown) => {
                if (cancelled) return
                const message = err instanceof Error ? err.message : String(err)
                setPriceMap(snapshot)
                setSource('snapshot')
                setError(`Live pricing unavailable (${message}); using bundled snapshot.`)
            })
            .finally(() => {
                if (!cancelled) setLoading(false)
            })

        return () => {
            cancelled = true
        }
    }, [partsKey, currency, snapshot])

    return { priceMap, loading, error, source }
}
