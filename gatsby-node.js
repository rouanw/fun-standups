/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const standups = require('./src/standup-data.json')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  standups.forEach((standup) => {
    createPage({
      path: standup.slug,
      component: path.resolve(`./src/components/standup-details.js`),
        context: {
          standup,
        }
    })
  });
}
