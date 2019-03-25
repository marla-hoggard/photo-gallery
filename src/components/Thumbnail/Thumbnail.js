import React, { Component } from 'react';

import { capitalize } from '../../helpers';
import NameLink from '../NameLink';
import '../../stylesheets/images.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.goToAlbum = this.goToAlbum.bind(this);
  }

  goToAlbum() {
    this.props.setCurrentAlbum(this.props.albumId);
    this.props.hideUserView();
  }

  get titleText() {
    const cutoff = this.props.showUserDetails ? 17 : 34;
    if (this.props.albumName.length <= cutoff) {
      return capitalize(this.props.albumName);
    }
    return capitalize(this.props.albumName.slice(0,cutoff)) + '...';
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
        <div className="thumb--banner">
          <div className="thumb--title">{this.titleText}</div>
          { showUserDetails &&
            <div className="thumb--name">By:&nbsp;
              <NameLink userDetails={userDetails} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Thumbnail;
