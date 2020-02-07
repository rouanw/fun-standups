import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Standup = ({ title, summary, slug }) => (
  <div className="standup-wrapper">
    <Link to={`/${slug}`}>
      <div className="standup">
        <div className="standup-title">{title}</div>
        <div className="standup-summary">{summary}</div>
      </div>
    </Link>
  </div>
)

Standup.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Standup
