import { combineReducers } from 'redux';

import app from './app';
import albums from './albums';
import photos from './photos';
import users from './users';

export default combineReducers({
  app,
  albums,
  photos,
  users,
});