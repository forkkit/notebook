const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Notebook',
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-digital-garden',
      options: {
        mdxLayouts: {
          default: path.resolve('./src/layout')
        }
      }
    }
  ],
  plugins: [
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
