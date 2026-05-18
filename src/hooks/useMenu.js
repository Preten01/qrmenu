import { useState, useEffect } from 'react'
import { getMenuBySlug } from '../data'

/**
 * Hook to load a restaurant menu by slug.
 * Returns { menu, loading, error }
 * 
 * To migrate to Supabase: update getMenuBySlug() in src/data/index.js
 */
export function useMenu(slug) {
  const [menu, setMenu]       = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!slug) return

    let cancelled = false
    setLoading(true)
    setError(null)

    getMenuBySlug(slug)
      .then((data) => {
        if (cancelled) return
        if (!data) setError('Menü bulunamadı.')
        else setMenu(data)
      })
      .catch(() => {
        if (!cancelled) setError('Menü yüklenirken bir hata oluştu.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => { cancelled = true }
  }, [slug])

  return { menu, loading, error }
}
