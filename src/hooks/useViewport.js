import { useState, useEffect } from 'react'

export function useViewport() {
  const [w, setW] = useState(window.innerWidth)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { mobile: w < 768, tablet: w < 1024, w }
}
