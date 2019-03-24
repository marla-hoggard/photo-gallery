import {
  GET_ALBUMS_PENDING,
  GET_ALBUMS_FULFILLED,
  GET_ALBUMS_REJECTED,
  SET_CURRENT_ALBUM,
} from '../actions/actionTypes';

const defaultState = {
  albums: [],
  currentId: null,
  loading: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_ALBUMS_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case GET_ALBUMS_FULFILLED:
      return {
        ...state,
        albums: action.payload.albums,
        loading: false,
      }
    case GET_ALBUMS_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case SET_CURRENT_ALBUM:
      return {
        ...state,
        currentId: action.payload.id,
      }
    default:
      return state
  }
}