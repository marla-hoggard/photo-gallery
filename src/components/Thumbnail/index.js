import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';
import {
  hideUserView,
  setCurrentAlbum,
  setCurrentUser,
  showUserView,
} from '../../actions';
import {
  getAlbumThumbnail, 
  getUserDetailsByAlbumId,
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    image: getAlbumThumbnail(state, ownProps.albumId),
    userDetails: getUserDetailsByAlbumId(state, ownProps.albumId),
  }
};

const mapDispatchToProps = dispatch => ({
  hideUserView: () => dispatch(hideUserView()),
  setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
