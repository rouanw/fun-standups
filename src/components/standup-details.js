import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import "../components/standup-details.css"
import RelatedStandups from "../components/RelatedStandups"

const StandupDetails = ({ pageContext }) => {
  const { standup } = pageContext
  return (
    <Layout>
      <SEO title={`${standup.title}`} />
      <div className="standup-details-wrapper">
        <div className="standup standup-details">
          <h2>{standup.title}</h2>
          <p>{standup.summary}</p>
          <p>{standup.description}</p>
          <ul>
            {standup.benefits.map((benefit)=><li className="benefit">{benefit}</li>)}
          </ul>
        </div>
        <RelatedStandups tags={standup.tags} title={standup.title} />
      </div>
    </Layout>
  )
}

export default StandupDetails
