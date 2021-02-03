/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/post.js`)
  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "markdowns" } }) {
        edges {
          node {
            id
            childMarkdownRemark {
              html
              frontmatter {
                title
                slug
                excerpt
                author
                rank
                date
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.childMarkdownRemark.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.childMarkdownRemark.frontmatter.slug,
      },
    })
  })
}
