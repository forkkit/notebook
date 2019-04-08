module.exports = {
  siteMetadata: {
    title: 'Notebook',
  },
  __experimentalThemes: [
    'gatsby-theme-digital-garden',
  ],
  plugins: [
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
