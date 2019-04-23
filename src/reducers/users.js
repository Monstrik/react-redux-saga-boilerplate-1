import { GET_USERS2_SAGA_FAILED, GET_USERS_SAGA_FAILED, SET_USERS, SET_USERS2 } from '../constants';

const initialState = { users: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_USERS2:
      return {
        ...state,
        users: action.users
      };
    case GET_USERS_SAGA_FAILED:
      return {
        ...state,
        errorMsg: action.error.message
      };
    case GET_USERS2_SAGA_FAILED:
      return {
        ...state,
        errorMsg: action.error.message
      };
    default:
      return state;
  }
}
