import { connect } from 'react-redux';

import NameLink from './NameLink';
import {
  setCurrentUser, 
  showUserView,
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
})

export default connect(null, mapDispatchToProps)(NameLink);
