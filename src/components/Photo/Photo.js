import React, { Component } from 'react';

import '../../stylesheets/images.css';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.goToPhoto = this.goToPhoto.bind(this);
  }

  goToPhoto() {
    this.props.setCurrentPhoto(this.props.index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const { 
      image,
      selected,
    } = this.props;
    return (
      <div className="thumb--container">
        <img 
          className={`thumb--image ${selected ? 'thumb--selected' : ''}`}
          src={image.thumbnailUrl} 
          alt={image.title} 
          onClick={this.goToPhoto}
        />
      </div>
    );
  }
}

export default Photo;
