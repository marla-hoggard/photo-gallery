import { connect } from 'react-redux';

import AlbumGallery from './AlbumGallery';
import {
  setCurrentAlbum,
  toggleUserView,
} from '../../actions';
import {
  getAlbumsBySelectedUser,
} from '../../reducers/selectors';

const mapStateToProps = state => ({
  albums: getAlbumsBySelectedUser(state, state.users.currentId),
});

const mapDispatchToProps = dispatch => ({
  setCurrentAlbum: () => dispatch(setCurrentAlbum()),
  toggleUserView: () => dispatch(toggleUserView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumGallery);
