const snackbars = (state = { open: false, message: '' }, action) => {
  switch (action.type) {
    case 'SHOW_ADMIN_SNACK':
      return { open: true, message: 'Project Added' };
    case 'SHOW_TAG_SNACK':
      return { open: true, message: 'Tag Added' };
    case 'HIDE_SNACK':
      return { open: false, message: '' };
    default:
      return state;
  }
}

export default snackbars;
