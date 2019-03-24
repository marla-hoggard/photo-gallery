import { connect } from 'react-redux';

import Photo from './Photo';
import {
  hideUserView,
  setCurrentAlbum,
  setCurrentUser,
  setCurrentPhoto,
  showUserView,
} from '../../actions';
import {
  getPhoto,
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    image: getPhoto(state, ownProps.photoId),
  }
};

const mapDispatchToProps = dispatch => ({
  hideUserView: () => dispatch(hideUserView()),
  setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  setCurrentPhoto: (id) => dispatch(setCurrentPhoto(id)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
