import base from '@theme-ui/preset-base'
import merge from 'lodash.merge'

export default merge(base, {
  fonts: {
    body: '"Roboto Mono", Menlo, monospace',
    heading: '"Roboto Mono", Menlo, monospace',
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  fontWeights: {
  },
  sizes: {
    container: 768,
  },
  styles: {
    hr: {
      border: 0,
      borderBottom: '1px solid',
    },
    pre: {
      p: 3,
      bg: 'muted',
    }
  }
})
