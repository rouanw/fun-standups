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
import "./layout.sass"
import UnicornHead from "../components/unicorn-head"

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

      <main>{children}</main>

      <footer>
        <div className="footer-content">
          <p>
            Made with ❤️ by <a href="https://www.rouanw.com" rel="external">Rouan Wilsenach</a>
          </p>
          <p>
            Do you have a standup format you'd like to see here? It's
            {` `}
            <a
              href="https://forms.gle/QtQXGZ3E3UCaMnoG9"
              rel="noopener noreferrer external"
            >easy to add</a>
            {` `}
            and we'd love it!
          </p>
          <p>
            All original content is licensed under the
            {` `}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              rel="noopener noreferrer external"
            >Creative Commons Attribution-ShareAlike 4.0 International</a>
            {` `}
            license.
          </p>
        </div>
        <div className="footer-illustration">
          <UnicornHead />
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
