import React from "react"

const Header = () => (
  <header
    style={{
      background: `#43adacc4`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1600,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <a
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img className="splash" src="https://rouanw.github.io/fun-standups/bunnycow.png" alt=""/>
      </a>
      <h1 style={{ margin: 0 }} className="splash-wrapper">
        <a
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <span className="site-name">Fun Standups!</span>
        </a>
      </h1>
      <div className="tagline">Remote-friendly standup ideas for your team</div>
    </div>
  </header>
)

export default Header
