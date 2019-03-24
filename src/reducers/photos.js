import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
  SET_CURRENT_PHOTO,
} from '../actions/actionTypes';

const defaultState = {
  photos: [],
  currentId: null,
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
    case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentId: action.payload.id,
      }
    default:
      return state
  }
}