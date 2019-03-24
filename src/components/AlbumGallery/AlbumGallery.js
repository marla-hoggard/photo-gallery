import React, { Component } from 'react';

import Thumbnail from '../Thumbnail';
import '../../stylesheets/AlbumGallery.css';

class AlbumGallery extends Component {
  render() {
    const { 
      albums,
      showUserDetails,
    } = this.props;
    return (
      <div className="album-gallery-container">
        {
          albums.map(album =>
            <Thumbnail key={album.id} albumId={album.id} showUserDetails={showUserDetails} />
          )
        }
      </div>
    );
  }
}

export default AlbumGallery;
