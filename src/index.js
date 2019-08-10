/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from './layout'

export const wrapPageElement = ({ element, props }) =>
  <Layout {...props}>
    {element}
  </Layout>

export const Nav = props => {
  const data = useStaticQuery(pages)
  const links = data.allSitePage.nodes

  return (
    <ul
      sx={{
        listStyle: 'none',
        display: 'grid',
        p: 0,
        m: 0,
        gridGap: 3,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      }}>
      {links.map(({ path }) => (
        <li key={path}>
          <Link to={path}>
            {path}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const pages = graphql`
  query Pages {
    allSitePage {
      nodes {
        path
      }
    }
  }
`
