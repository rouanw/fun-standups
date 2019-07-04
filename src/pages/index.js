import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"

const formats = [{
  title:"Give an update to the next person",
  description:"Each person gives an update to the next person in the team, using their name and making eye contact",
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
  title:"One thing only",
  description:"Each team member only talks about the single most important thing they want to tell people",
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
  title:"Zoom way out",
  description:"Give an update on each epic",
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
  title:"One person missing",
  description:"One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status.",
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
},
{
  title:"Zoom way in",
  description:"Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team",
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}]
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="formats">
        {formats.map((format) => <Format title={format.title} imageUrl={format.imageUrl} description={format.description} ></Format>)}
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
