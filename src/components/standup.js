import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Standup = ({ standup, tagColors }) => {
  const { title, summary, slug, tags = [] } = standup;
  return (
    <div className="standup-wrapper">
      <Link to={`/${slug}`}>
        <div className="standup standup-card">
          <div className="standup-title">{title}</div>
          <div className="standup-summary">{summary}</div>
          <div className="standup-tags">
            {tags.map((tag)=> (
              <span className="tag" style={{
                'background-color': tagColors ? tagColors[tag] : 'grey',
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
}

Standup.propTypes = {
  standup: PropTypes.shape({
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }),
  tagColors: PropTypes.array.isRequired,
}

export default Standup
