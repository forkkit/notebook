import React from 'react'
import { Link } from 'gatsby'
import { Header } from 'theme-ui/layout'
import { Styled, css } from 'theme-ui'

export default props =>
  <Header
    css={css({
      p: 3,
    })}>
    <Styled.a
      as={Link}
      to='/'
      css={css({
        mr: 2
      })}>
      Notebook
    </Styled.a>
    <Styled.a as={Link} to='/notes'>
      Notes
    </Styled.a>
  </Header>
