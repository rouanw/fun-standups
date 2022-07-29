import _ from 'lodash'
import standups from "./standup-data.json"

const availableTags = Array.from(new Set(_.flatten(standups.map((standup) => standup.tags)).filter(Boolean)));
const colors = ['#006030', '#7f004f', '#004a49', '#7e281b', '#4c5700'];
const tagColors = () => availableTags.reduce((accum, tag, index) => {
  return {...accum, ...{ [tag]: colors[index]}};
}, {})

export default tagColors;
