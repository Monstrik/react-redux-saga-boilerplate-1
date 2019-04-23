import {
  GET_USERS2_SAGA,
  GET_USERS2_SAGA_FAILED,
  GET_USERS_SAGA,
  GET_USERS_SAGA_FAILED,
  SET_USERS,
  SET_USERS2
} from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function setUsers2(users) {
  return {
    type: SET_USERS2,
    users
  };
}

export function getUsersSagaFailed(error) {
  return {
    type: GET_USERS_SAGA_FAILED,
    error
  };
}


export function getUsers2SagaFailed(error) {
  return {
    type: GET_USERS2_SAGA_FAILED,
    error
  };
}



export function getUsersSaga() {
  return { type: GET_USERS_SAGA };
}

export function getUsers2Saga() {
  return { type: GET_USERS2_SAGA };
}

