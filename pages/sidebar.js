import React from 'react'
import { Global } from '@emotion/core'
import {
  Box,
  Layout,
  Header,
  Main,
  Container,
  Footer,
} from 'theme-ui/layout'

export default props => {
  return (
    <Layout>
      <Global
        styles={{
          '*': { boxSizing: 'border-box' },
          body: { margin: 0 }
        }}
      />
      <Header p={3} bg='cyan'>
        Header
      </Header>
      <Main>
        <h1>Sidebar layout prototypes</h1>
      </Main>
      <Footer p={3} bg='cyan'>
        Footer
      </Footer>
    </Layout>
  )
}
