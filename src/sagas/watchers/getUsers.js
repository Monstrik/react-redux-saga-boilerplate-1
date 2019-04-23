import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_USERS2_SAGA, GET_USERS_SAGA } from '../../constants';
import { getUsers2SagaFailed, getUsersSagaFailed, setUsers, setUsers2 } from '../../actions';
import { getUsers, getUsers2 } from '../../lib/api';

function* workerGetUsersSaga() {
  try {
    const users = yield call(getUsers);
    yield put(setUsers(users));
  } catch (error) {
    yield put(getUsersSagaFailed(error));
  }
}

function* workerGetUsers2Saga() {
  try {
    const users = yield call(getUsers2);
    console.log('workerGetUsers2Saga', users);
    yield put(setUsers2(users.data));
  } catch (error) {
    yield put(getUsers2SagaFailed(error));
  }
}

export function* watchGetUsersSaga() {
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
}

export function* watchGetUsers2Saga() {
  yield takeLatest(GET_USERS2_SAGA, workerGetUsers2Saga);
}
