module.exports = {
  siteMetadata: {
    description: "Personal page of Bella Lim",
    locale: "en",
    title: "Bella Lim",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
