import { forwardRef } from 'react'
import { jsx } from '@emotion/core'
import { css } from '@styled-system/css'

export default forwardRef(({
  as = 'div',
  children,
  className,
  id,
  ...props
}, ref) =>
  jsx(as, {
    css: css(props),
    className,
    id,
    children,
  })
)
