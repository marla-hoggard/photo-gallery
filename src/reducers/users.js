import {
  GET_USERS_PENDING,
  GET_USERS_FULFILLED,
  GET_USERS_REJECTED,
} from '../actions/actionTypes';

const defaultState = {
  users: [],
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_USERS_FULFILLED:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      }
    case GET_USERS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}