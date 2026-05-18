import { useState, useEffect, useRef } from 'react'

/**
 * Lazy loads an image when it enters the viewport.
 * Returns { imgRef, loaded, error }
 */
export function useLazyImage(src) {
  const imgRef         = useRef(null)
  const [loaded, setLoaded]   = useState(false)
  const [error, setError]     = useState(false)

  useEffect(() => {
    if (!src || !imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image()
          img.src = src
          img.onload  = () => setLoaded(true)
          img.onerror = () => setError(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src])

  return { imgRef, loaded, error }
}
