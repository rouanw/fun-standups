import PropTypes from "prop-types"
import React from "react"

const Standup = ({ standup, tagColors }) => {
  const { title, summary, slug, tags = [] } = standup;
  return (
    <li className="standup">
      <h2 className="standup--title">
        <a href={`/${slug}`}>{title}</a>
      </h2>
      <p className="standup--summary">{summary}</p>
      <ul className="standup--tags">
        {tags.map((tag)=> (
          <li key={tag} className="standup--tag" style={{
            color: tagColors ? tagColors[tag] : 'grey',
          }}>
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
