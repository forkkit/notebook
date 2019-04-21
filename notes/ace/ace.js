import React from 'react'
import { polygon, flipX } from 'mathit'

const paths = {
  leftEye: [
    'M', 13, 12,
    'A', 1, 2, 0, 0, 0, 13, 16,
    'A', 1, 2, 0, 0, 0, 13, 12,
    'z'
  ].join(' '),
  rightEye: [
    'M', 19, 12,
    'A', 1, 2, 0, 0, 0, 19, 16,
    'A', 1, 2, 0, 0, 0, 19, 12,
    'z'
  ].join(' '),
  mouth: [
    'M', 18, 19,
    'A', 2, 2, 0, 0, 1, 14, 19,
  ].join(' '),
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
    />
    <g fill='pink' opacity={1/2}>
      <circle
        r={1}
        cx={9}
        cy={18}
      />
      <circle
        r={1}
        cx={23}
        cy={18}
      />
    </g>
  </g>

export default ({
  size = 128,
  color = 'currentcolor',
}) =>
<svg
  viewBox='0 0 32 32'
  width={size}
  height={size}
  fill={color}>
  <rect
    fill='#111'
    width='32'
    height='32'
  />
  <Face />
</svg>
