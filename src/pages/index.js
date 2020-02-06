import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"
import formats from "../format-data"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="formats">
        {formats.map((format) => <Format title={format.title} summary={format.summary} slug={format.slug}></Format>)}
      </div>
    </div>
  </Layout>
)

export default IndexPage
