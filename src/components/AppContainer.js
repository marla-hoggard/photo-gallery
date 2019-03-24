import { connect } from 'react-redux';

import App from './App';
import {
  getAlbums,
  getPhotos,
  getUsers,
} from '../actions';

const mapStateToProps = state => ({
  albums: state.albums.albums,
  photos: state.photos.photos,
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbums()),
  getPhotos: () => dispatch(getPhotos()),
  getUsers: () => dispatch(getUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
