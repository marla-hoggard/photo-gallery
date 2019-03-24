import React, { Component } from 'react';

import AlbumGallery from './AlbumGallery';
import Loader from './Loader';
import PhotoAlbum from './PhotoAlbum';
import UserDetails from './UserDetails';
import '../stylesheets/App.css';

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

  render() {
    return (
      <>
        <h1>Teamstagram</h1>
        {this.componentToDisplay}
      </>
    );
  }
}

export default App;
