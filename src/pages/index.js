import React, { useEffect, useState } from "react";
import _ from 'lodash'

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/fun-standups.sass"
import Standup from "../components/standup"
import standups from "../standup-data.json"
import Unicorns from "../components/unicorns"

const filterStandupsByTag = (standups, tag) => standups.filter((standup) => standup.tags && standup.tags.includes(tag))

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));

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
    
      <section className="hero">
        <h1 className="display">Remote-friendly standup ideas for your team</h1>

        <div className="hero--illustration">
          <Unicorns />
        </div>
        
        <div className="hero--preamble">
          <h2>Tired of having the same old Zoom call every day?</h2>
          <p>Use these fun and creative standup formats to mix things up and learn more about your team and work.</p>
        </div>

        <div className="buttons">
          <button
            id="get-random"
            className="button -primary"
            onClick={() => {
              let randomUrl = [standups[Math.floor(Math.random() * standups.length)].slug]
              window.location.assign(randomUrl)
            }}
          >Random standup idea!</button>
          {installStatus?.install === 'slack' && installStatus?.status === 'success' ? <div className="button-banner" aria-live="polite">☑️ Added to Slack</div> : <a href="https://slack.com/oauth/v2/authorize?client_id=1456654958694.4200110150032&scope=chat:write,commands&user_scope=" className="button -secondary"><img src="/slack-logo.svg" className="icon" alt="" role="presentation" /> Add to Slack</a>}
        </div>
      </section>


      <section className="standup-section">
        <nav className="filter-navigation">
          <div
            className="buttons"
            role="radiogroup"
            aria-label="Filter"
            aria-controls="cards">
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
                  key={tag}
                >{tag}</button>
              ))
            }
          </div>
        </nav>

        <p id="standup--count" aria-live="assertive">{`Showing ${visiblestandups.length} stand-ups.`}</p>

        <ul
          id="cards"
          className="cards"
          style={{
            transition: `opacity ${transitionTiming}ms ease-in-out`,
            opacity: `${isHidingStandups ? 0 : 1}`
          }}
          onTransitionEnd={() => setHidingStandups(false)}
        >
          {visiblestandups.map((standup) => <Standup key={standup.title} standup={standup}></Standup>)}
        </ul>
      </section>
    </Layout>
  )
}

export default IndexPage
