import React from 'react'
import { polygon } from 'mathit'

const flip = n => n > 16
  ? 16 - (n - 16)
  : 16 + (16 - n)

const paths = {
  leftEye: [
    'M', 14, 11,
    'A', 1, 1.5, 0, 0, 0, 14, 14,
    'A', 1, 1.5, 0, 0, 0, 14, 11,
    'z'
  ].join(' '),
  rightEye: [
    'M', 18, 11,
    'A', 1, 1.5, 0, 0, 0, 18, 14,
    'A', 1, 1.5, 0, 0, 0, 18, 11,
    'z'
  ].join(' '),
  mouth: [
    'M', 18, 17,
    'A', 2, 2, 0, 0, 1, 14, 17,
  ].join(' '),
  spade: [
    'M', 16, 0,
    'C', 13, 1, 0, 12, 0, 20,
    'C', 0, 28, 6, 28, 8, 28,
    'C', 13, 28, 16, 24, 16, 24,
    // right
    'C', 16, 24, flip(13), 28, flip(8), 28,
    'C', flip(8), 28, flip(0), 28, flip(0), 20,
    'C', flip(0), 12, flip(13), 1, 16, 0,
    'z',
  ].join(' '),
  handle: [
    'M', 15, 24,
    'L', 17, 24,
    'L', 19, 32,
    'L', 13, 32,
    'z',
  ].join(' ')
}

const Face = props =>
  <g {...props} fill='white'>
    <path d={paths.leftEye} />
    <path d={paths.rightEye} />
    <path
      d={paths.mouth}
      fill='none'
      stroke='white'
      strokeLinecap='round'
      strokeWidth={1/2}
    />
    <g fill='red' opacity={0.5}>
      <circle
        r={1.5}
        cx={10}
        cy={16}
      />
      <circle
        r={1.5}
        cx={22}
        cy={16}
      />
    </g>
  </g>

export default ({
  size = 256,
  color = '#000',
  ...props
}) =>
<svg
  {...props}
  viewBox='0 0 32 32'
  width={size}
  height={size}
  fill={color}>
  <path d={paths.spade} />
  <path d={paths.handle} />
  <Face />
</svg>
