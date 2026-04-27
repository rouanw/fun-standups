import React from "react"

const Standup = ({ standup }) => {
  const { title, summary, slug, tags = [] } = standup;
  return (
    <li className="card">
      <h2 className="card--title">
        <a className="card--link" href={`/${slug}/`}>{title}</a>
      </h2>
      <p className="card--summary">{summary}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Standup
