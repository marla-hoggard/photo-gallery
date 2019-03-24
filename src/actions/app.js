import {
  SHOW_USER_VIEW,
  HIDE_USER_VIEW,
} from './actionTypes';

export const showUserView = () => ({
  type: SHOW_USER_VIEW,
});

export const hideUserView = () => ({
  type: HIDE_USER_VIEW,
});