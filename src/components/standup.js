import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Standup = ({ title, summary, slug, tags, tagColors }) => (
  <div className="standup-wrapper">
    <Link to={`/${slug}`}>
      <div className="standup">
        <div className="standup-title">{title}</div>
        <div className="standup-summary">{summary}</div>
        <div className="standup-tags">
          {tags.map((tag)=> (
            <span className="tag" style={{
              'background-color': tagColors[tag],
            }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </div>
)

Standup.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  tagColors: PropTypes.array.isRequired,
  tags: PropTypes.array,
}

Standup.defaultProps = {
  tags: []
}

export default Standup
