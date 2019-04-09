import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Box } from 'theme-ui/layout'
import merge from 'lodash.merge'

export const Block = ({
  components,
  theme,
  styles,
  ...props
}) =>
  <ThemeProvider
    components={components}
    theme={merge({}, theme, {
      styles
    })}>
    <Box data-block {...props} />
  </ThemeProvider>

const toFunction = Component => defaults => ({ children, ...props }) =>
  <Component
    {...merge({}, defaults, props)}
    children={children}
  />

// blocks
export const Bar = props =>
  <Block
    {...props}
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    styles={{
      ul: {
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        m: 0,
        p: 0,
      },
      li: {
        display: 'flex',
      },
      a: {
        p: 3,
        m: 0,
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
          color: 'inherit',
        },
        '&[title=button]': {
          mx: 3,
          p: 2,
          display: 'inline-block',
          color: 'white',
          bg: 'blue',
          borderRadius: 4,
        }
      },
    }}
  />

Bar.props = toFunction(Bar)
