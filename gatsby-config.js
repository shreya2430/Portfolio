module.exports = {
  siteMetadata: {
    title: `Shreya Wanisha`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Shreya Wanisha`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/img/logo/logo.png"
      }
    },
    `gatsby-plugin-sass`,
  ],
}
