import React, { Component } from 'react';

import Thumbnail from '../Thumbnail';
import '../../stylesheets/AlbumGallery.css';

class AlbumGallery extends Component {
  get title() {
    if (this.props.selectedUserName) {
      return `Albums by ${this.props.selectedUserName}`;
    } 
    return "";
  }
  render() {
    const { 
      albums,
      showUserDetails,
    } = this.props;
    return (
      <>
        <div className="container-title">{this.title}</div>
        <div className="album-gallery-container">
          {
            albums.map(album =>
              <Thumbnail key={album.id} albumId={album.id} showUserDetails={showUserDetails} />
            )
          }
        </div>
      </>
    );
  }
}

export default AlbumGallery;
