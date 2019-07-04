import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Format = ({ title, description, slug }) => (
  <div className="format">
    <div className="format-title">{title}</div>
    <div className="format-description">{description}</div>
    <Link to={`/${slug}`}>Read more</Link>
  </div>
)

Format.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Format
