import { connect } from 'react-redux';

import NameLink from './NameLink';
import {
  setCurrentUser, 
  setCurrentPhoto,
  showUserView,
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  setCurrentPhoto: (index) => dispatch(setCurrentPhoto(index)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
})

export default connect(null, mapDispatchToProps)(NameLink);
