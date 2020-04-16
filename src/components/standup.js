import PropTypes from "prop-types"
import React from "react"

const Standup = ({ standup, tagColors }) => {
  const { title, summary, slug, tags = [] } = standup;
  return (
    <div className="standup-wrapper">
      <a href={`/${slug}`}>
        <div className="standup standup-card">
          <div className="standup-title">{title}</div>
          <div className="standup-summary">{summary}</div>
          <div className="standup-tags">
            {tags.map((tag)=> (
              <span key={tag} className="tag" style={{
                backgroundColor: tagColors ? tagColors[tag] : 'grey',
              }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
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
  tagColors: PropTypes.object.isRequired,
}

export default Standup
