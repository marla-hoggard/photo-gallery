import { connect } from 'react-redux';

import UserDetails from './UserDetails';

import {
  getUserDetails,
  getAlbumsBySelectedUser,
} from '../../reducers/selectors';

const mapStateToProps = state => {
  const selectedUser = state.users.currentId;
  return {
    albums: getAlbumsBySelectedUser(state),
    userDetails: getUserDetails(state, selectedUser),
  };
};

export default connect(mapStateToProps)(UserDetails);