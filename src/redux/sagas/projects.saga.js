import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTags() {
  try {
    const tagResponse = yield call(axios.get, '/api/tag');
    yield dispatch({ type: 'SET_TAGS', payload: tagResponse.data });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* addProject(action) {
  try {
    yield call(axios.post, '/api/project', action.payload);
    yield dispatch({ type: 'FETCH_PROJECTS' });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* deleteProject(action) {
  try {
    yield call(axios.delete, `/api/project/${action.payload}`);
    yield dispatch({ type: 'FETCH_PROJECTS' });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* fetchProjects() {
  try {
    const projectResponse = yield call(axios.get, `/api/project`);
    yield dispatch({ type: 'SET_PROJECTS', payload: projectResponse.data });
  } catch (error) {
    console.log('error: ', error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_TAGS', fetchTags);
  yield takeEvery('ADD_PROJECT', addProject);
  yield takeEvery('FETCH_PROJECTS', fetchProjects);
  yield takeEvery('DELETE_PROJECT', deleteProject);
}

export default rootSaga;
