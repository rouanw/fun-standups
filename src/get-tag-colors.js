import standups from "./standup-data"

const availableTags = Array.from(new Set(standups.map((standup) => standup.tags).flat().filter(Boolean)));
const colors = ['#F4B28D', '#E7E0A8', '#C2DFD0', '#A38690'];
const tagColors = availableTags.reduce((accum, tag, index) => {
  return {...accum, ...{ [tag]: colors[index]}};
}, {})

export default () => {
  return tagColors;
}
