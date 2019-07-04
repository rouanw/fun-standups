/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const formats = require('./src/format-data')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  formats.forEach((format) => {
    createPage({
      path: format.slug,
      component: path.resolve(`./src/components/format-details.js`),
        context: {
          format,
        }
    })
  });
}
