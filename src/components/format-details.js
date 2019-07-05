import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format-details.css"

const FormatDetails = ({ pageContext }) => {
  const { format } = pageContext
  return (
    <Layout>
      <SEO title="TBC" />

      <div className="content">
        <div className="white-board">
        <h2>{format.title}</h2>
        <h3>Summary</h3>
        <p>{format.summary}</p>
        <h3>Description</h3>
        <p>{format.description}</p>
        <h3>Benefits</h3>
        <ul>
          {format.benefits.map((benefit)=><li>{benefit}</li>)}
          </ul>
          <div className="eraser"></div>
          <div className="red-pen"></div>
          <div className="blue-pen"></div>
        </div>
      </div>
    </Layout>
  )
}

export default FormatDetails
