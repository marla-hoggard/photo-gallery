import React, { Component } from 'react';

import NameLink from '../NameLink';
import '../../stylesheets/Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.goToAlbum = this.goToAlbum.bind(this);
  }

  goToAlbum() {
    this.props.setCurrentAlbum(this.props.albumId);
    this.props.hideUserView();
  }

  render() {
    const { 
      image,
      showUserDetails,
      userDetails,
    } = this.props;
    return (
      <div className="thumb--container">
        <img 
          className="thumb--image" 
          src={image.thumbnailUrl} 
          alt={image.title} 
          onClick={this.goToAlbum}
        />
        { showUserDetails &&
          <div className="thumb--name">By:&nbsp;
            <NameLink userDetails={userDetails} />
          </div>
        }
      </div>
    );
  }
}

export default Thumbnail;
