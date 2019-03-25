import React, { Component } from 'react';

import AlbumGallery from '../AlbumGallery';
import { getAvatar } from '../../helpers';
import '../../stylesheets/UserDetails.css';

class UserDetails extends Component {
  render() {
    const { 
      albums,
      userDetails,
    } = this.props;
    return (
      <div className="user">
        <div className="user--image-section">
          <img 
            className="user--image"
            alt="profile pic" 
            src={getAvatar(userDetails.id)} 
          />
          <div className="user--name">{userDetails.name}</div>
        </div>
        <div className="user--data-section">
          <div className="user--data-title">Username</div><div>{userDetails.username}</div>
          <div className="user--data-title">Email</div><div>{userDetails.email}</div>
          <div className="user--data-title">Address</div><div>
            {userDetails.address.street}{userDetails.address.suite && `, ${userDetails.address.suite}`}<br/>
            {userDetails.address.city} {userDetails.address.zipcode.slice(0,5)}
          </div>
          <div className="user--data-title">Phone</div><div>{userDetails.phone}</div>
        </div>
        <AlbumGallery albums={albums} showUserDetails={false} />
      </div>
    );
  }
}

export default UserDetails;
