import { useEffect } from 'react'

export function useCursorDot() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const onMove = (e: MouseEvent) => {
      if (!dot) return
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }
    const dg = document.getElementById('dot-grid')
    if (dg && dg.childElementCount === 0) {
      for (let i = 0; i < 40; i++) dg.appendChild(document.createElement('span'))
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])
}