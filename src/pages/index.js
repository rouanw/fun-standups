import React, { useState } from 'react'
import _ from 'lodash'

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/fun-standups.sass"
import Standup from "../components/standup"
import standups from "../standup-data.json"
import getTagColors from "../get-tag-colors"

const filterStandupsByTag = (standups, tag) => standups.filter((standup) => standup.tags && standup.tags.includes(tag))

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));
const tagColors = getTagColors();

const IndexPage = () => {
  const [visiblestandups, setVisiblestandups] = useState(standups)
  const [currentTag, setCurrentTag] = useState()
  const [isHidingStandups, setHidingStandups] = useState(false)
  const transitionTiming = 400

  return (
    <Layout>
      <SEO title="Home" socialTitle />
      <section className="page-header">
        <h1 className="display">Remote-friendly standup ideas for your team</h1>
        <p>Tired of having the same old Zoom call every day?</p>
        <p>Use these fun and creative standup formats to mix things up and learn more about your team and work.</p>
        <button className="button -primary"
          onClick={() => {
            let randomUrl = [standups[Math.floor(Math.random() * standups.length)].slug]
            window.location.assign(randomUrl)
          }}
        >Gimme a random idea!</button>
      </section>

      <nav className="standup-navigation">
        <p id="filter-label">Filter:</p>
        <div
          className="standup-filters"
          role="radiogroup"
          aria-labelledby="filter-label"
          aria-controls="standups">
          {
            availableTags.map((tag, index) => (
              <button
                key={index}
                className="button -tag"
                onClick={() => {
                  setHidingStandups(true)
                  setTimeout(() => {
                    setVisiblestandups(filterStandupsByTag(standups, tag))
                  }, transitionTiming)
                  setCurrentTag(tag)
                }}
                role="radio"
                aria-checked={tag === currentTag ? 'true' : 'false'}
                style={{
                  color: tag === currentTag ? 'white' : tagColors[tag]
                }}
                key={tag}
              >{tag}</button>
            ))
          }
          <span aria-live="polite">
            <button
              className="button -tag -clear"
              onClick={() => {
                setHidingStandups(true)
                setTimeout(() => {
                  setVisiblestandups(standups)
                }, transitionTiming)
                setHidingStandups(true)
                setCurrentTag()
              }}
              style={{
                display: currentTag ? 'block' : 'none'
              }}
            ><span aria-hidden="true">× </span>Clear filter</button>
          </span>
        </div>
      </nav>

      <ul
        id="standups"
        className="standups"
        style={{
          transition: `opacity ${transitionTiming}ms ease-in-out`,
          opacity: `${isHidingStandups ? 0 : 1}`
        }}
        onTransitionEnd={() => setHidingStandups(false)}
      >
        {visiblestandups.map((standup) => <Standup key={standup.title} standup={standup} tagColors={tagColors}></Standup>)}
      </ul>
    </Layout>
  )
}

export default IndexPage
