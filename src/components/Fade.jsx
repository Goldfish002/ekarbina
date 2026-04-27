import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

export function Fade({ children, delay = 0, style = {} }) {
  const ref = useRef()
  const visible = useInView(ref)
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(22px)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}
