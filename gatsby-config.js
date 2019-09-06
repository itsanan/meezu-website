module.exports = {
  siteMetadata: {
    title: `Meezu`,
    description: `A Creative Agency based in Surakarta, we are ready to shape your project into the next level.`,
    keywords: `creative agency, model, copywriting, music production house, web designer, studio, brand, surakarta, indonesia`,
    author: `@itsanan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'd2ifza39d1oj',
        accessToken: '2EJxrg3vqkdecJxkh-Ip1mr-tIStkQu2Wl3IK5xvm_0'
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/meezu-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
