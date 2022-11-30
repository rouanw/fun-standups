import React from "react"
import Logo from "../components/fun-standups-logo"

const Header = () => (
  <header className="masthead">
    <a href="/" aria-label="Fun Standups!">
      <Logo />
    </a>
    <p className="tagline" hidden>Remote-friendly standup ideas for your team</p>
  </header>
)

export default Header
