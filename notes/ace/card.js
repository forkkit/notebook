import React from 'react'
import Ace from './ace'

const defs = (
  <defs>
    <filter id="dropshadow" height="150%">
      <feGaussianBlur
        in="SourceAlpha"
        stdDeviation={0.5}
      />
      <feOffset dx="0" dy="0.5" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.2"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
)

export default ({
  size = 256,
  ...props
}) =>
<svg
  viewBox='0 0 64 64'
  {...props}
  width={size}
  height={size}
>
  {defs}
  <rect
    x={10}
    y={2}
    width={44}
    height={60}
    rx={2}
    ry={2}
    fill='#fff'
    style={{
      filter: 'url(#dropshadow)'
    }}
  />
  {/* <Ace x={20} y={18} size={24} /> */}
  <Ace
    x={16}
    y={16}
    size={32}
  />
</svg>
