import PropTypes from "prop-types"
import React from "react"

const Format = ({ title, description }) => (
  <div className="format">
    <div className="format-title">{title}</div>
    <div className="format-description">{description}</div>
  </div>
)

Format.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default Format
