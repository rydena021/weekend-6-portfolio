import { combineReducers }  from 'redux';
import tags from './tags.reducer';
import projects from './projects.reducer';
import snackbars from './snackbars.reducer';

export default combineReducers({
  tags,
  projects,
  snackbars
});
