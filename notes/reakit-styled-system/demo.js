import React from 'react'
import styled from 'styled-components'
import { Provider, Button } from 'reakit'
import theme from 'reakit-theme-default'
import {
  color,
  width,
} from 'styled-system'

const ResponsiveButton = styled(Button)(width)

export default props =>
  <Provider theme={theme}>
    <ResponsiveButton width={[ 1, 1/2 ]}>
      ResponsiveButton
    </ResponsiveButton>
  </Provider>
