/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

export default props => {
  const fullwidth = props.location.pathname === '/'

  return (
    <Styled.root
      sx={{
        p: 3,
        maxWidth: fullwidth ? 'none' : 'container',
        mx: 'auto',
      }}>
      <header>
        <Styled.a
          as={Link}
          to='/'
          sx={{
            fontWeight: 'bold',
            color: 'inherit',
            textDecoration: 'none',
          }}>
          Notebook
        </Styled.a>
      </header>
      {props.children}
    </Styled.root>
  )
}
