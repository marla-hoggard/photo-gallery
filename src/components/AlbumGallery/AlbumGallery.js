import React, { Component } from 'react';

import Thumbnail from '../Thumbnail';
import '../../stylesheets/images.css';

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
      <div className="span2">
        <div className="thumbs--container-title">{this.title}</div>
        <div className="thumbs--container">
          {
            albums.map(album =>
              <Thumbnail key={album.id} albumId={album.id} showUserDetails={showUserDetails} />
            )
          }
        </div>
      </div>
    );
  }
}

export default AlbumGallery;
