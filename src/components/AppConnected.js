import { connect } from 'react-redux';

import App from './App';
import {
  getAlbums,
  getPhotos,
  getUsers,
} from '../actions';
import { 
  getAlbumDetails,
  getUserDetails,
  getUserDetailsByAlbumId,
} from '../reducers/selectors';

const mapStateToProps = state => {
  const userId = state.users.currentId || getUserDetailsByAlbumId(state, state.albums.currentId).id;
  
  return {  
    fetched: state.albums.albums.length && state.photos.photos.length && state.users.users.length,
    selectedAlbum: state.albums.currentId,
    albumDetails: getAlbumDetails(state, state.albums.currentId),
    userDetails: getUserDetails(state, userId),
    viewUserDetailsPage: state.app.showUserDetails,
  };
};

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getPhotos: () => dispatch(getPhotos()),
  getUsers: () => dispatch(getUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
