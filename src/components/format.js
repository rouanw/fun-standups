import PropTypes from "prop-types"
import React from "react"

const Format = ({ title, imageUrl, description }) => (
  <div className="format">
    <div className="format-title">{title}</div>
    <img className="format-image" src={imageUrl} />
    <div className="format-description">{description}</div>
  </div>
)

Format.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  description: PropTypes.string.isRequired,
}

Format.defaultProps = {
  imageUrl: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}

export default Format
