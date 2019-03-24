import {
  TOGGLE_USER_VIEW,
} from '../actions/actionTypes';

const defaultState = {
  showUserDetails: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_USER_VIEW:
      return {
        ...state,
        showUserDetails: !state.showUserDetails,
      }
    default:
      return state
  }
}