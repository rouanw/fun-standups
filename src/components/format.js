import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Format = ({ title, summary, slug }) => (
  <div className="format-wrapper">
    <Link to={`/${slug}`}>
      <div className="format">
        <div className="format-title">{title}</div>
        <div className="format-summary">{summary}</div>
      </div>
    </Link>
  </div>
)

Format.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Format
