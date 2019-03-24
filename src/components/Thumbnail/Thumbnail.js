import React, { Component } from 'react';

import '../../stylesheets/Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.goToUser = this.goToUser.bind(this);
    this.goToAlbum = this.goToAlbum.bind(this);
  }

  goToAlbum() {
    this.props.setCurrentAlbum(this.props.albumId);
    this.props.hideUserView();
  }

  goToUser() {
    this.props.setCurrentUser(this.props.userDetails.id);
    this.props.showUserView();
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
            <span 
              className="name-link"
              onClick={this.goToUser}
            >
              {userDetails.name}
            </span>
          </div>
        }
      </div>
    );
  }
}

export default Thumbnail;
