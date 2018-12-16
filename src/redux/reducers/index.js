import { combineReducers }  from 'redux';
import tags from './tags.reducer';
import projects from './projects.reducer';

export default combineReducers({
  tags,
  projects
});
