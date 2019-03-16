import { connect } from 'react-redux';

import App from './App';
import actions from '../actions/actions';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  reduxThing: () => dispatch(actions()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
