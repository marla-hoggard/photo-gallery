import React, { Component } from 'react';

import '../../stylesheets/Photo.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.goToPhoto = this.goToPhoto.bind(this);
  }

  goToPhoto() {
    console.log(`Clicked ${this.props.photoId}`);
  }

  render() {
    const { 
      image,
    } = this.props;
    return (
      <div className="thumb--container">
        <img 
          className="thumb--image" 
          src={image.thumbnailUrl} 
          alt={image.title} 
          onClick={this.goToPhoto}
        />
      </div>
    );
  }
}

export default Photo;
