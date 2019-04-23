import { all, fork } from 'redux-saga/effects';

import { watchGetUsersSaga, watchGetUsers2Saga } from './watchers/getUsers';

export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetUsers2Saga)
  ]);
}
