import React, { Component } from 'react';

import '../../stylesheets/Thumbnail.css';

class Thumbnail extends Component {
  render() {
    const { 
      image,
      showUserDetails,
      userDetails,
    } = this.props;
    return (
      <div className="thumb--container">
        <img className="thumb--image" src={image.thumbnailUrl} alt={image.title} />
        { showUserDetails &&
          <div className="thumb--name">By: {userDetails.name}</div>
        }
      </div>
    );
  }
}

export default Thumbnail;
