import {
  GET_PHOTOS_PENDING,
  GET_PHOTOS_FULFILLED,
  GET_PHOTOS_REJECTED,
  NEXT_PHOTO,
  PREVIOUS_PHOTO,
  SET_CURRENT_PHOTO,
} from '../actions/actionTypes';

const defaultState = {
  photos: [],
  currentIndex: 0,
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
    case NEXT_PHOTO:
      return {
        ...state,
        currentIndex: state.currentIndex < state.photos.length - 1 ? state.currentIndex + 1 : state.currentIndex,
      }
    case PREVIOUS_PHOTO:
      return {
        ...state,
        currentIndex: state.currentIndex > 0 ? state.currentIndex - 1 : 0,
      }
      case SET_CURRENT_PHOTO:
      return {
        ...state,
        currentIndex: action.payload.index,
      }
    default:
      return state
  }
}