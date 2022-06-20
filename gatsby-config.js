module.exports = {
  siteMetadata: {
    title: `Upine Apps`,
    description: `Building the applications of the future. At Upine Apps, we believe technology should work to make your life easier. We strive to build efficient software, find solutions, and integrate technology at an appropriate cost.`,
    author: `Upine Apps`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
