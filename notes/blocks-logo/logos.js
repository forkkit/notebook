import React from 'react'
import { radians, polygon } from 'mathit'

const points = polygon({
  center: 16,
  sides: 6,
  radius: 14,
})

const x = i => points[i][0]
const y = i => points[i][1]

const block = points
  .reduce((acc, [x, y], i, points) => {
  acc.push(i == 0 ? 'M' : 'L')
  acc.push(x, y)
  if (i === points.length - 1) {
    acc.push('z')
  }
  return acc
}, []).join(' ')

const peg = [
  'M', 0, 0,
  'A', 3, 1, 0, 0, 0, 0, 2,
  'A', 3, 1, 0, 0, 0, 0, 0,
].join(' ')

// soh cah toa
const a = [ 16, 5 ]
const space = 7
const pegs = [
  // [ x, y ]
  a,
  [
    a[0] + Math.cos(radians(30)) * space,
    a[1] + Math.sin(radians(30)) * space,
  ],
  [
    a[0] + Math.cos(radians(150)) * space,
    a[1] + Math.sin(radians(150)) * space,
  ],
]
pegs.push([
  pegs[2][0] + Math.cos(radians(30)) * space,
  pegs[2][1] + Math.sin(radians(30)) * space,
])

// not great
export const BlockA = ({
  size = 96,
  ...props
}) =>
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    stroke='currentcolor'
  >
    <path d={block} />
    {pegs.map(([ x, y ]) => (
      <path key={'' + x + y} d={peg} transform={`translate(${x}, ${y})`} />
    ))}
  </svg>

const cap = [
  'M', 16, 2,
  'L', 16, 16,
  'M', x(5), y(5),
  'L', 16, 16,
  'L', x(1), y(1),
  'M', x(1), y(1),
  'L', x(5), y(5),
].join(' ')

export const BlockB = ({
  size = 96,
  ...props
}) =>
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    stroke='currentcolor'
  >
    <path d={block} />
    <path d={cap} strokeWidth={1/2} />
  </svg>

export const BlockC = ({
  size = 96,
  ...props
}) =>
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='none'
    stroke='currentcolor'
  >
    <path d={block} />
    <path d={[
      'M', x(5), y(5),
      'L', x(2), y(2),
      'M', x(1), y(1),
      'L', x(4), y(4),
    ].join(' ')} strokeWidth={1/2} />
  </svg>
