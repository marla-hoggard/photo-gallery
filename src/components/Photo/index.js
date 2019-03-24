import { connect } from 'react-redux';

import Photo from './Photo';
import {
  hideUserView,
  setCurrentAlbum,
  setCurrentUser,
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
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
