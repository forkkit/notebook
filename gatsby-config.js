const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Notebook',
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'roboto mono:400,700',
        ]
      }
    }
  ]
}
