import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const defaultState = {};

const configureStore = (initialState = defaultState) => {
 return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
 );
}

export default configureStore;