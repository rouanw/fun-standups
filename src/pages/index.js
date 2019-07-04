import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/format.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <div className="formats">
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
        <div className="format">
          <div className="format-title">The title</div>
          <img className="format-image" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          <div className="format-description">This is a description This is a descriptionThis is a description This is a description</div>
        </div>
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
