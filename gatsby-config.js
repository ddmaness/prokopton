module.exports = {
  siteMetadata: {
    title: "Prokopton",
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`
      }
    },
    'gatsby-transformer-remark',
  ],
};
