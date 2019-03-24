import React, { Component } from 'react';

import AlbumGallery from '../AlbumGallery';
import '../../stylesheets/UserDetails.css';

class UserDetails extends Component {
  render() {
    const { 
      albums,
      userDetails,
    } = this.props;
    return (
      <>
        <p>Username: {userDetails.username}</p>
        <p>Email: {userDetails.email}</p>
        <p>
          Address:<br/>
          {userDetails.address.street}{userDetails.address.suite && `, ${userDetails.address.suite}`}<br/>
          {userDetails.address.city} {userDetails.address.zipcode.slice(0,5)}
        </p>
        <p>Phone: {userDetails.phone}</p>
        <AlbumGallery albums={albums} showUserDetails={false} />
      </>
    );
  }
}

export default UserDetails;
