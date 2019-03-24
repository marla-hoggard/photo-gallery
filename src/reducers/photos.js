import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
} from '../actions/actionTypes';

const defaultState = {
  photos: [],
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_PHOTOS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_PHOTOS_FULFILLED:
      return {
        ...state,
        photos: action.payload.photos,
        loading: false,
      }
    case GET_PHOTOS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}