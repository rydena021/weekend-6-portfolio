// Used to store projects returned from the server
const projects = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return action.payload;
    default:
      return state;
  }
}

export default projects;
