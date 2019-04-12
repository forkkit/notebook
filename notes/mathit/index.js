// mathit

const radians = a => Math.PI * a / 180

const polygon = ({
  radius = 16,
  sides = 3,
  center = 0,
  angle = -90,
}) =>
  Array.from({ length: sides })
    .map((n, i) => [
      center + radius * Math.cos(radians(angle) + i * (2 * Math.PI / sides)),
      center + radius * Math.sin(radians(angle) + i * (2 * Math.PI / sides))
    ])

module.exports = {
  radians,
  polygon,
}
