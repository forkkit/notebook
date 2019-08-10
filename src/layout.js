/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default props => {
  const fullwidth = props.location.pathname === '/'

  return (
    <Styled.root
      sx={{
        p: 3,
        maxWidth: fullwidth ? 'none' : 'container',
        mx: 'auto',
      }}>
      {props.children}
    </Styled.root>
  )
}
