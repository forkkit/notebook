import test from 'ava'
import {
  radians,
  polygon,
} from './index'

// just making sure this never breaks
test('converts degrees to radians', t => {
  const n = radians(90)
  t.snapshot(n)
})

test('returns coordinates for a regular polygon', t => {
  const points = polygon({ sides: 5, center: 16 })
  t.snapshot(points)
})
