import { connect } from 'react-redux';

import Thumbnail from './Thumbnail';
import {
  setCurrentAlbum,
  toggleUserView,
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
  setCurrentAlbum: () => dispatch(setCurrentAlbum()),
  toggleUserView: () => dispatch(toggleUserView()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
