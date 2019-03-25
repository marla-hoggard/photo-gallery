import React, { Component } from 'react';

import AlbumGallery from './AlbumGallery';
import Header from './Header/index';
import Loader from './Loader';
import NameLink from './NameLink/index';
import PhotoAlbum from './PhotoAlbum';
import UserDetails from './UserDetails';
import { capitalize } from '../helpers';

class App extends Component {
  componentDidMount() {
    this.props.getAlbums();
    this.props.getPhotos();
    this.props.getUsers();
  }

  get componentToDisplay() {
    const { fetched, selectedAlbum, viewUserDetailsPage } = this.props;
    if (!fetched) {
      return <Loader loadingText="Loading..." />;
    }
    if (viewUserDetailsPage) {
      return <UserDetails />
    }
    if (selectedAlbum) {
      return <PhotoAlbum />
    }
    return <AlbumGallery showUserDetails />;
  }

  get headerText() {
    const { 
      albumDetails,
      fetched, 
      selectedAlbum, 
      userDetails,
      viewUserDetailsPage 
    } = this.props;

    if (!fetched) {
      return "Photo Gallery"
    }
    if (viewUserDetailsPage) {
      return userDetails.name
    }
    if (selectedAlbum) {
      return <span><NameLink userDetails={userDetails} /> > {capitalize(albumDetails.title)}</span>
    }
    return "Photo Gallery"
  }

  render() {
    return (
      <>
        <Header headerText={this.headerText}/>
        {this.componentToDisplay}
      </>
    );
  }
}

export default App;
