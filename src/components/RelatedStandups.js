import React from "react"

import _ from 'lodash'
import allStandups from "../standup-data.json"
import Standup from "./standup";
import getTagColors from "../get-tag-colors";

const RelatedStandups = ({ tags, title }) => {
  const shuffledStandups = allStandups.sort(() => Math.random() - 0.5)
  const relatedStandups = shuffledStandups.filter((standup) => standup.title !== title && _.intersection(standup.tags, tags).length).slice(0, 3);
  return Boolean(relatedStandups.length) && (
    <aside className="related-standups">
      <h2 className="related-standups--header">Try these next</h2>
      <ul className="standups">
        {relatedStandups.map((standup) => <Standup key={standup.title} standup={standup} tagColors={getTagColors()} />)}
      </ul>
    </aside>
  )
}

export default RelatedStandups
