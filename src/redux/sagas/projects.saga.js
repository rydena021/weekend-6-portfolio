import { takeEvery, call, put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlants() {
  try {
    const plantsResponse = yield call(axios.get, '/api/plant');
    yield dispatch({ type: 'SET_PLANTS', payload: plantsResponse.data });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* postPlant(action) {
  try {
    yield call(axios.post, '/api/plant', action.payload);
    yield dispatch({ type: 'FETCH_PLANTS' });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* deletePlant(action) {
  try {
    yield call(axios.delete, `/api/plant/${action.payload}`);
    yield dispatch({ type: 'FETCH_PLANTS' });
  } catch (error) {
    console.log('error: ', error);
  }
}

function* getPlant(action) {
  try {
    const detailsResponse = yield call(axios.get, `/api/plant/details/${action.payload}`);
    yield dispatch({ type: 'SET_PLANT', payload: detailsResponse });
  } catch (error) {
    console.log('error: ', error);
  }
}

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_PLANTS', fetchPlants);
  yield takeEvery('ADD_PLANT', postPlant);
  yield takeEvery('DELETE_PLANT', deletePlant);
  yield takeEvery('GET_PLANT', getPlant);
}

export default rootSaga;
