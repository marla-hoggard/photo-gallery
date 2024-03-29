import {
  GET_ALBUMS_PENDING,
  GET_ALBUMS_FULFILLED,
  GET_ALBUMS_REJECTED,
  SET_CURRENT_ALBUM,
} from './actionTypes';

import { handleErrors } from './actionHelpers';

export const getAlbums = () => {
  return dispatch => {
    dispatch(getAlbumsPending());
    return fetch('https://jsonplaceholder.typicode.com/albums')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getAlbumsFulfilled(json));
        return json;
      })
      .catch(error => dispatch(getAlbumsRejected(error)));
  };
}

export const getAlbumsPending = () => ({
  type: GET_ALBUMS_PENDING,
});

export const getAlbumsFulfilled = albums => ({
  type: GET_ALBUMS_FULFILLED,
  payload: { albums },
});

export const getAlbumsRejected = error => ({
  type: GET_ALBUMS_REJECTED,
  payload: { error },
});

export const setCurrentAlbum = id => ({
  type: SET_CURRENT_ALBUM,
  payload: { id },
});