import _ from 'lodash'
import standups from "./standup-data.json"

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));
const colors = ['#626E5a', '#b96a3f', '#9a5067', '#7b680f', '#465a65'];
const tagColors = availableTags.reduce((accum, tag, index) => {
  return {...accum, ...{ [tag]: colors[index]}};
}, {})

export default () => {
  return tagColors;
}
