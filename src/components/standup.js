import PropTypes from "prop-types"
import React from "react"

const Standup = ({ standup, tagColors }) => {
  const { title, summary, slug, tags = [] } = standup;
  return (
    <li className="card">
      <h2 className="card--title">
        <a className="card--link" href={`/${slug}`}>{title}</a>
      </h2>
      <p className="card--summary">{summary}</p>
      <ul className="tags">
        {tags.map((tag)=> (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </li>
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
