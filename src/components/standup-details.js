import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import "../components/standup-details.css"

const StandupDetails = ({ pageContext }) => {
  const { standup } = pageContext
  return (
    <Layout>
      <SEO title="TBC" />

      <div className="content">
        <div className="white-board">
        <h2>{standup.title}</h2>
        <h3>Summary</h3>
        <p>{standup.summary}</p>
        <h3>Description</h3>
        <p>{standup.description}</p>
        <h3>Benefits</h3>
        <ul>
          {standup.benefits.map((benefit)=><li>{benefit}</li>)}
          </ul>
          <div className="eraser"></div>
          <div className="red-pen"></div>
          <div className="blue-pen"></div>
        </div>
      </div>
    </Layout>
  )
}

export default StandupDetails
