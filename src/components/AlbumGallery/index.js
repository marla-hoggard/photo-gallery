import { connect } from 'react-redux';

import AlbumGallery from './AlbumGallery';
import {
  getAlbumsBySelectedUser, getUserDetails,
} from '../../reducers/selectors';

const mapStateToProps = state => {
  const currentUserId = state.users.currentId;
  return {
    albums: getAlbumsBySelectedUser(state, currentUserId),
    selectedUserName: currentUserId && getUserDetails(state, currentUserId).name,
  };
};


export default connect(mapStateToProps)(AlbumGallery);
