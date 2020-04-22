/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <p>
            All original content is licensed under the
            {` `}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Creative Commons Attribution-ShareAlike 4.0 International
            </a>
            {` `}
            license.
          </p>
          <p>
            Do you have a standup format you'd like to see here? It's
            {` `}
            <a
              href="https://github.com/rouanw/fun-standups#contributing-a-standup-format"
              rel="noopener noreferrer"
              target="_blank"
            >
              easy to add
            </a> and we'd love it!
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
