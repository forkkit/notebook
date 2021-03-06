import React from 'react'

/*
import { polygon } from 'mathit'
const points = polygon({
  sides: 5,
  radius: 11,
  center: 16,
  angle: 18,
})
*/

/*
const points = [
  [26.46162167924669,19.399186938124423],
  [16,27],
  [5.538378320753312,19.399186938124423],
  [9.534362224782793,7.100813061875579],
  [22.465637775217203,7.100813061875577]
]
const [ a, b, c, d, e ] = points
const xy = p => [ p[0], p[1] ]
const flower = [
  'M', ...xy(a),
  'A', 4, 4, 0, 0, 1, ...xy(b),
  'A', 4, 4, 0, 0, 1, ...xy(c),
  'A', 4, 4, 0, 0, 1, ...xy(d),
  'A', 4, 4, 0, 0, 1, ...xy(e),
  'A', 4, 4, 0, 0, 1, ...xy(a),
  'M', 16, 10,
  'A', 6, 6, 0, 0, 0, 16, 22,
  'A', 6, 6, 0, 0, 0, 16, 10,
  'z',
].join(' ')
*/

const flower = `M 26.46162167924669 19.399186938124423 A 4 4 0 0 1 16 27 A 4 4 0 0 1 5.538378320753312 19.399186938124423 A 4 4 0 0 1 9.534362224782793 7.100813061875579 A 4 4 0 0 1 22.465637775217203 7.100813061875577 A 4 4 0 0 1 26.46162167924669 19.399186938124423 M 16 10 A 6 6 0 0 0 16 22 A 6 6 0 0 0 16 10 z`

export default ({
  size = 512,
}) =>
  <svg
    viewBox='0 0 32 32'
    width={size}
    height={size}
    fill='pink'>
    <path d={flower} />
  </svg>
