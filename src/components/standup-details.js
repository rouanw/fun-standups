import React from "react"

import Layout from "./layout"
import Seo from "./seo"
import "../components/fun-standups.sass"
import RelatedStandups from "../components/RelatedStandups"

const StandupDetails = ({ pageContext }) => {
  const { standup } = pageContext
  return (
    <Layout>
      <Seo title={standup.title} description={standup.summary} slug={standup.slug} />
      <a href="/" className="back-link"><span aria-hidden="true">← </span>All ideas</a>
      <div className="standup-details">
        <h1 className="standup-details--title">{standup.title}</h1>
        <p className="standup-details--summary">{standup.summary}</p>
        <p>{standup.description}</p>
        <ul>
          {standup.benefits.map((benefit)=><li key={benefit.slice(0, 10)} className="standup-details--benefit">{benefit}</li>)}
        </ul>
        { standup.contributor && standup.contributor.github && (
          <p className="standup-details--contributor">
            Contributed by <a
              href={`https://github.com/${standup.contributor.github}`}
              rel="noopener noreferrer"
            >{standup.contributor.github}</a>.
          </p>
        )}
      </div>
      <RelatedStandups tags={standup.tags} title={standup.title} />
    </Layout>
  )
}

export default StandupDetails
