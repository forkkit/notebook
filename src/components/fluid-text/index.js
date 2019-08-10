import React, { useLayoutEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const FluidText = ({ base = 16, children }) => {
  const div = useRef(null)
  const [fontSize, setFontSize] = useState(base)

  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        if (entry.target !== div.current) return
        const { width } = entry.contentRect
        const ratio = width / 320
        const next = Math.floor(ratio * base)
        setFontSize(next)
      })
    })
    observer.observe(div.current)

    return () => observer.unobserve(div.current)
  }, [base])

  return (
    <div ref={div} style={{ fontSize }}>
      {children}
    </div>
  )
}

export default FluidText
