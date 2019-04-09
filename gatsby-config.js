module.exports = {
  siteMetadata: {
    title: 'Notebook',
  },
  __experimentalThemes: [
    'gatsby-theme-digital-garden',
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
