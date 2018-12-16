import { all } from 'redux-saga/effects';
import projectsSaga from './projects.saga';

export default function* rootSaga() {
  yield all([
    projectsSaga()
  ]);
}
