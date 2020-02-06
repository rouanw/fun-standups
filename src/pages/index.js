import React, { useState } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"
import formats from "../format-data"

const filterFormatsByTag = (formats, tag) => formats.filter((format) => format.tags && format.tags.includes(tag));

const availableTags = Array.from(new Set(formats.map((format) => format.tags).flat().filter(Boolean)));
const tagColours = ['#F4B28D', '#E7E0A8', '#C2DFD0', '#A38690'];

const IndexPage = () => {
  const [visibleFormats, setVisibleFormats] = useState(formats)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="tags">
          {
            availableTags.map((tag, index) => (
              <button
                className="tag"
                onClick={() => {setVisibleFormats(filterFormatsByTag(formats, tag))}}
                style={{
                  'background-color': tagColours[index],
                }}
              >
                {tag}
              </button>
            ))
          }
          <button
            className="tag"
            onClick={() => {setVisibleFormats(formats)}}
          >
            all
          </button>
        </div>
        <div className="formats">
          {visibleFormats.map((format) => <Format title={format.title} summary={format.summary} slug={format.slug}></Format>)}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
