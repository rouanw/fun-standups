import React from "react"

import Layout from "./layout"
import SEO from "./seo"
import "../components/standup-details.sass"
import RelatedStandups from "../components/RelatedStandups"

const StandupDetails = ({ pageContext }) => {
  const { standup } = pageContext
  return (
    <Layout>
      <SEO title={`${standup.title}`} description={`${standup.summary}`} />
      <div className="standup-details-wrapper">
        <div className="standup standup-details">
          <h2>{standup.title}</h2>
          <p>{standup.summary}</p>
          <p>{standup.description}</p>
          <ul>
            {standup.benefits.map((benefit)=><li key={benefit.slice(0, 10)} className="benefit">{benefit}</li>)}
          </ul>
          { standup.contributor && standup.contributor.github && (
            <div>
              Contributed by <a
                href={`https://github.com/${standup.contributor.github}`}
                rel="noopener noreferrer"
                target="_blank"
              >{standup.contributor.github}</a>.
            </div>
          )}
        </div>
        <RelatedStandups tags={standup.tags} title={standup.title} />
      </div>
    </Layout>
  )
}

export default StandupDetails
