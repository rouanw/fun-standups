import _ from 'lodash'
import standups from "./standup-data"

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));
const colors = ['#F4B28D', '#E7E0A8', '#C2DFD0', '#A38690', '#F7D7E2'];
const tagColors = availableTags.reduce((accum, tag, index) => {
  return {...accum, ...{ [tag]: colors[index]}};
}, {})

export default () => {
  return tagColors;
}
