import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"

const formats = [{
  title:"Give an update to the next person",
  description:"Each person gives an update to the next person in the team, using their name and making eye contact",
},
{
  title:"One thing only",
  description:"Each team member only talks about the single most important thing they want to tell people",
},
{
  title:"Zoom way out",
  description:"Give an update on each epic",
},
{
  title:"One person missing",
  description:"One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status.",
},
{
  title:"Zoom way in",
  description:"Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team",
}]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="formats">
        {formats.map((format) => <Format title={format.title} description={format.description} ></Format>)}
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
