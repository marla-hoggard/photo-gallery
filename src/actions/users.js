import {
  GET_USERS_PENDING,
  GET_USERS_FULFILLED,
  GET_USERS_REJECTED,
  SET_CURRENT_USER,
} from './actionTypes';

import { handleErrors } from './actionHelpers';

export const getUsers = () => {
  return dispatch => {
    dispatch(getUsersPending());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getUsersFulfilled(json));
        return json;
      })
      .catch(error => dispatch(getUsersRejected(error)));
  };
}

export const getUsersPending = () => ({
  type: GET_USERS_PENDING,
});

export const getUsersFulfilled = users => ({
  type: GET_USERS_FULFILLED,
  payload: { users }
});

export const getUsersRejected = error => ({
  type: GET_USERS_REJECTED,
  payload: { error }
});

export const setCurrentUser = id => ({
  type: SET_CURRENT_USER,
  payload: { id },
});