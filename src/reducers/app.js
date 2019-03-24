import {
  HIDE_USER_VIEW,
  SHOW_USER_VIEW,
} from '../actions/actionTypes';

const defaultState = {
  showUserDetails: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_USER_VIEW:
      return {
        ...state,
        showUserDetails: true,
      }
    case HIDE_USER_VIEW:
      return {
        ...state,
        showUserDetails: false,
      }
    default:
      return state
  }
}