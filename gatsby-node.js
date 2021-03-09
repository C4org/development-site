const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode})
    var preslug = "";

    if (node.fileAbsolutePath.indexOf("/events/") != -1){
      preslug = "events"
    }else if(node.fileAbsolutePath.indexOf("/posts/") != -1){
      preslug = "posts"
    }else{
      throw "MDX file not in a valid directory!"
    }
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/${preslug}${value}`,
    })
    createNodeField({
      // Name of the field you are adding
      name: "type",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `${preslug}`,
    })
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const blogResult = await graphql(`
    query {
      allMdx(filter: {fields: {type: {eq: "posts"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  
  if (blogResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = blogResult.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/blogLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  const eventsResult = await graphql(`
    query {
      allMdx(filter: {fields: {type: {eq: "events"}}}) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (eventsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const eventsposts = eventsResult.data.allMdx.edges

  // you'll call `createPage` for each result
  eventsposts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/eventLayout.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}