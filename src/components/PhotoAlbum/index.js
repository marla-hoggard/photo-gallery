import { connect } from 'react-redux';

import PhotoAlbum from './PhotoAlbum';
import {
  getAlbumDetails,
  getPhotosInSelectedAlbum, 
} from '../../reducers/selectors';

const mapStateToProps = state => {
  const currentAlbumId = state.albums.currentId;
  return {
    albumInfo: getAlbumDetails(state, currentAlbumId),
    photos: getPhotosInSelectedAlbum(state, currentAlbumId),
  };
};


export default connect(mapStateToProps)(PhotoAlbum);
