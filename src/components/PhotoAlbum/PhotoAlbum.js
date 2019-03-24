import React, { Component } from 'react';

import Photo from '../Photo';
import '../../stylesheets/PhotoAlbum.css';

class PhotoAlbum extends Component {
  get title() {
    if (this.props.selectedUserName) {
      return `Albums by ${this.props.selectedUserName}`;
    } 
    return "All albums";
  }
  render() {
    const { 
      albumInfo,
      photos,
    } = this.props;
    return (
      <>
        <div className="container-title">{albumInfo.title}</div>
        <div className="photo-album-container">
          {
            photos.map(photo =>
              <Photo key={photo.id} photoId={photo.id} />
            )
          }
        </div>
      </>
    );
  }
}

export default PhotoAlbum;
