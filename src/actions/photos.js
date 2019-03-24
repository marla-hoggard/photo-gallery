import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
} from './actionTypes';

import { handleErrors } from '.'

export const getPhotos = () => {
  return dispatch => {
    dispatch(getPhotosPending());
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(getPhotosFulfilled(json));
        return json;
      })
      .catch(error => dispatch(getPhotosRejected(error)));
  };
}

export const getPhotosPending = () => ({
  type: GET_PHOTOS_PENDING,
});

export const getPhotosFulfilled = photos => ({
  type: GET_PHOTOS_FULFILLED,
  payload: { photos }
});

export const getPhotosRejected = error => ({
  type: GET_PHOTOS_REJECTED,
  payload: { error }
});