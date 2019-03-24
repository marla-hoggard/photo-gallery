import { connect } from 'react-redux';

import PhotoAlbum from './PhotoAlbum';
import {
  nextPhoto,
  previousPhoto,
  setCurrentAlbum,
  setCurrentUser,
  showUserView,
} from '../../actions';
import {
  getAlbumDetails,
  getPhotosInSelectedAlbum,
  getUserDetailsByAlbumId, 
} from '../../reducers/selectors';

const mapStateToProps = state => {
  const currentAlbumId = state.albums.currentId;
  return {
    albumInfo: getAlbumDetails(state, currentAlbumId),
    currentIndex: state.photos.currentIndex,
    photos: getPhotosInSelectedAlbum(state, currentAlbumId),
    user: getUserDetailsByAlbumId(state, currentAlbumId),
  };
};

const mapDispatchToProps = dispatch => ({
  nextPhoto: () => dispatch(nextPhoto()),
  previousPhoto: (id) => dispatch(previousPhoto(id)),
  setCurrentAlbum: (id) => dispatch(setCurrentAlbum(id)),
  setCurrentUser: (id) => dispatch(setCurrentUser(id)),
  showUserView: () => dispatch(showUserView()),
})


export default connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum);
