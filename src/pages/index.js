import React, { useState } from 'react'
import _ from 'lodash'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/standup.sass"
import Standup from "../components/standup"
import standups from "../standup-data.json"
import getTagColors from "../get-tag-colors"

const filterStandupsByTag = (standups, tag) => standups.filter((standup) => standup.tags && standup.tags.includes(tag));

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));
const tagColors = getTagColors();

const IndexPage = () => {
  const [visiblestandups, setVisiblestandups] = useState(standups)
  const [currentTag, setCurrentTag] = useState()
  return (
    <Layout>
      <SEO title="Home" socialTitle />
      <div className="container">
        <div className="description">
          Tired of having the same old Zoom call every day? Use these fun and creative standup formats to mix things up and learn more about your team and work.
        </div>
        <div className="tags">
          {
            availableTags.map((tag) => (
              <button
                className="tag tag-button"
                onClick={() => {
                  setCurrentTag(tag)
                  setVisiblestandups(filterStandupsByTag(standups, tag))
                }}
                style={{
                  backgroundColor: tagColors[tag],
                  fontWeight: tag === currentTag ? 'bold' : 'normal',
                  opacity: !currentTag || tag === currentTag ? 1 : 0.5
                }}
                key={tag}
              >
                {tag}
              </button>
            ))
          }
          <div>
            <button
              className="tag tag-button"
              onClick={() => {
                setCurrentTag()
                setVisiblestandups(standups)
              }}
            >
              show all
            </button>
            <button className="tag tag-button random"
              onClick={() => {
                setVisiblestandups([standups[Math.floor(Math.random() * standups.length)]])
                setCurrentTag()
              }}
            >
              random!
            </button>
          </div>
        </div>
        <div className="standups">
          {visiblestandups.map((standup) => <Standup key={standup.title} standup={standup} tagColors={tagColors}></Standup>)}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
