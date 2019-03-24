import { connect } from 'react-redux';

import Header from './Header';
import {
  hideUserView,
  setCurrentAlbum,
  setCurrentUser,
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  hideUserView: () => dispatch(hideUserView()),
  setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
})

export default connect(null, mapDispatchToProps)(Header);
