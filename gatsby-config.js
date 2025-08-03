module.exports = {
  siteMetadata: {
    title: `Shreya Wanisha - Software Engineer`,
    description: `Software Engineer passionate about building scalable backend systems`,
    author: `Shreya Wanisha`,
    siteUrl: `https://shreyawanisha-portfolio.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shreya Wanisha - Software Engineer`,
        short_name: `Shreya Portfolio`,
        start_url: `/`,
        background_color: `#667eea`,
        theme_color: `#667eea`,
        display: `minimal-ui`,
        icon: `static/apple-touch-icon.png`,
      },
    }, 
  ],
}