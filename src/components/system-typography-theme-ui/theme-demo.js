import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider, Styled } from 'theme-ui'
import { themes } from '@styled-system/typography'
import get from 'lodash.get'
import Lorem from '../lorem.mdx'

const names = Object.keys(themes)

const Fonts = () =>
  <Helmet>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Poppins:400,700,900|Roboto:400,700,900|Roboto+Mono:400,700'
    />
  </Helmet>

export default props => {
  const [ name, setTheme ] = useState('modern')
  const cycle = () => {
    const i = (names.indexOf(name) + 1) % names.length
    setTheme(names[i])
  }

  const theme = {
    styles: {
      ...themes[name],
      wrapper: get(themes, `${name}.body`)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Fonts />
      <div>
        <label>
          Theme:
          <select
            name='theme'
            value={name}
            onChange={e => {
              setTheme(e.target.value)
            }}>
            {names.map(name => (
              <option key={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button onClick={cycle}>
          Next
        </button>
      </div>
      <Styled.wrapper>
        <Styled.h1>
          Typography + Theme UI Demo
        </Styled.h1>
        <Lorem />
        <pre children={JSON.stringify(theme, null, 2)} />
      </Styled.wrapper>
    </ThemeProvider>
  )
}
