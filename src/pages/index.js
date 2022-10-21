import React, { useEffect, useState } from "react"
import _ from 'lodash'

import Layout from "../components/layout"
import Seo from "../components/seo"
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
  const [installStatus, setInstallStatus] = useState(undefined)
  useEffect(() => {
    const { install, status } = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    })
    setInstallStatus({
      install,
      status,
    })
  }, []);
  const transitionTiming = 400

  return (
    <Layout>
      <Seo title="Home" socialTitle />
      <div className="hero">
        <section className="page-header">
          <h1 className="display">Remote-friendly standup ideas for your team</h1>
          <div>
            <p>Tired of having the same old Zoom call every day?</p>
            <p>Use these fun and creative standup formats to mix things up and learn more about your team and work.</p>
          </div>
          <div className="buttons">
            <button
              className="button -primary"
              onClick={() => {
                let randomUrl = [standups[Math.floor(Math.random() * standups.length)].slug]
                window.location.assign(randomUrl)
              }}
            >Random standup idea!</button>
            <a
              className="button -secondary"
              href="https://forms.gle/QtQXGZ3E3UCaMnoG9"
              rel="external"
            >I have an idea...</a>
          </div>
          {installStatus?.install === 'slack' && installStatus?.status === 'success' ? <section>
            <div className="install -success">Yay! You've successfully installed the Fun Standups Slack App! 💜</div>
          </section> : null}
        </section>
        <section>
          <img className="hero-image" src="/women-talking-concept-illustration_114360-8881.jpg" alt="Illustration of people talking"/>
        </section>
      </div>

      <nav className="standup-navigation">
        <p id="filter-label">Filter:</p>
        <div
          className="standup-filters"
          role="radiogroup"
          aria-labelledby="filter-label"
          aria-controls="standups">
          <button
            className="button -tag"
            onClick={() => {
              setHidingStandups(true)
              setTimeout(() => {
                setVisiblestandups(standups)
                setHidingStandups(false)
              }, transitionTiming)
              setCurrentTag()
            }}
            role="radio"
            aria-checked={currentTag ? 'false' : 'true'}
          >Show all</button>
          {
            availableTags.map((tag, index) => (
              <button
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
        </div>
      </nav>

      <p id="standup-count" aria-live="assertive">{`Showing ${visiblestandups.length} stand-ups.`}</p>

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
