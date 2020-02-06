import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Format = ({ title, summary, slug }) => (
  <div className="format">
    <Link to={`/${slug}`}>
      <div className="format-title">{title}</div>
    </Link>
    <div className="format-summary">{summary}</div>
  </div>
)

Format.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

export default Format
