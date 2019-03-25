import { connect } from 'react-redux';

import Header from './Header';
import {
  hideUserView,
  setCurrentAlbum,
  setCurrentPhoto,
  setCurrentUser,
} from '../../actions';

const mapDispatchToProps = dispatch => ({
  hideUserView: () => dispatch(hideUserView()),
  setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  setCurrentPhoto: (index) => dispatch(setCurrentPhoto(index)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
})

export default connect(null, mapDispatchToProps)(Header);
