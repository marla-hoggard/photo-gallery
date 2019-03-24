import { connect } from 'react-redux';

import App from './App';
import {
  getAlbums,
  getPhotos,
  getUsers,
  toggleUserView,
} from '../actions';

const mapStateToProps = state => ({
  fetched: state.albums.albums.length && state.photos.photos.length && state.users.users.length,
  selectedAlbum: state.albums.currentId,
  viewUserDetailsPage: state.app.showUserDetails,
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getPhotos: () => dispatch(getPhotos()),
  getUsers: () => dispatch(getUsers()),
  toggleUserView: () => dispatch(toggleUserView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
