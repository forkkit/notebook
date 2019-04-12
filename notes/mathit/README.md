
# mathit

Utilities for calculating coordinates and other math-stuff

```js
import { radians } from 'mathit'

radians(90) // convert degrees to radians
```

```js
import { polygon } from 'mathit'

const points = polygon({
  radius: 16,
  center: 16,
  sides: 6,
  angle: -90
})
// returns an array of `[x, y]` coordinates for a regular polygon
```

MIT License
