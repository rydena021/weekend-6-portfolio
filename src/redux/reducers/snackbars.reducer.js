const snackbars = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_ADMIN_SNACK':
      return true;
    case 'HIDE_ADMIN_SNACK':
      return false;
    default:
      return state;
  }
}

export default snackbars;
