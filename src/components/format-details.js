import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"

const FormatDetails = ({ pageContext } ) => {
  const { format } = pageContext;
  return (
    <Layout>
      <SEO title="TBC" />
      <div className="container">
        <Format title={format.title} summary={format.summary}></Format>
      </div>
    </Layout>
  );
}

export default FormatDetails
