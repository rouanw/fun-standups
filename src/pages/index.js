import React, { useState } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/format.css"
import Format from "../components/format"
import formats from "../format-data"

const filterFormatsByTag = (formats, tag) => formats.filter((format) => format.tags && format.tags.includes(tag));

const availableTags = Array.from(new Set(formats.map((format) => format.tags).flat().filter(Boolean)));

const IndexPage = () => {
  const [visibleFormats, setVisibleFormats] = useState(formats)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="container">
        <div className="tags">
          {
            availableTags.map((tag) => (
              <button
                className="tag"
                onClick={() => {setVisibleFormats(filterFormatsByTag(formats, tag))}}
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
