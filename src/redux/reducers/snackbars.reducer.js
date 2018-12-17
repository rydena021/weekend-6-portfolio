const snackbars = (state = { open: false, message: '' }, action) => {
  switch (action.type) {
    case 'SHOW_PROJECT_SNACK':
      return { open: true, message: 'Project Added' };
    case 'SHOW_TAG_SNACK':
      return { open: true, message: 'Tag Added' };
    case 'SHOW_DELETE_SNACK':
      return { open: true, message: 'Project Deleted' };
    case 'HIDE_SNACK':
      return { open: false, message: '' };
    default:
      return state;
  }
}

export default snackbars;
