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
      <div className="page-header">
        <h1>Tired of having the same old Zoom call every day?</h1>
        <p>Use these fun and creative standup formats to mix things up and learn more about your team and work.</p>
      </div>
      <div className="standup-navigation">
        <button className="button -primary"
          onClick={() => {
            let randomUrl = [standups[Math.floor(Math.random() * standups.length)].slug]
            window.location.assign(randomUrl)
          }}
        >Gimme a random format!</button>
        <ul className="tags">
          {
            availableTags.map((tag) => (
              <li>
                <button
                  className="button -tag"
                  onClick={() => {
                    setCurrentTag(tag)
                    setVisiblestandups(filterStandupsByTag(standups, tag))
                  }}
                  style={{
                    color: tagColors[tag],
                    fontWeight: tag === currentTag ? 'bold' : 'normal',
                    opacity: !currentTag || tag === currentTag ? 1 : 0.5
                  }}
                  key={tag}
                >{tag}</button>
              </li>
            ))
          }
          <li>
            <button
              className="button -show-all"
              onClick={() => {
                setCurrentTag()
                setVisiblestandups(standups)
              }}
            >Show all</button>
          </li>
        </ul>
      </div>
      <ul className="standups">
        {visiblestandups.map((standup) => <Standup key={standup.title} standup={standup} tagColors={tagColors}></Standup>)}
      </ul>
    </Layout>
  )
}

export default IndexPage
