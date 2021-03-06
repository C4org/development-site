/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    numberOfChapters: 8,
    numberOfMembers: 167,
    numberOfYears:2,
    numberOfDollars: 960,
    title: "C4 Organization",
    titleTemplate: "%s  · C4",
    description: "C4 is a high school organization whose mission is to help pediatric cancer patients. We find and provide opportunities for everyone to show their support and help.",
    url: "https://c4org.github.io",
    image: "/development-site/logo.png",

  },
  pathPrefix: "/development-site",
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        }
   },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/posts/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `events`,
      path: `${__dirname}/events/`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
    },
  },
  `gatsby-plugin-postcss`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-react-helmet`,
    
  ],
}
