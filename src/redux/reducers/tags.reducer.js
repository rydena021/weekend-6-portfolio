// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return action.payload;
    default:
      return state;
  }
}

export default tags;
