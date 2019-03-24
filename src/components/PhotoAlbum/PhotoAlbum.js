import React, { Component } from 'react';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Photo from '../Photo';
import '../../stylesheets/PhotoAlbum.css';

class PhotoAlbum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      currentIndex,
      photos,
    } = this.props;
    return (
      <>
        <div className="large-photo-row">
          <div 
            className={currentIndex > 0 ? 'prev-photo': 'prev-photo disabled'}
            onClick={this.props.previousPhoto}
          >
            <KeyboardArrowLeft />
          </div>
          <div>
            <img 
              className="big--image" 
              src={photos[currentIndex].url} 
              alt={photos[currentIndex].title} 
            />
            <div className="large-photo-title">{photos[currentIndex].title}</div>
          </div>
          <div 
            className={currentIndex < photos.length - 1 ? 'next-photo': 'next-photo disabled'}
            onClick={this.props.nextPhoto}
          >
            <KeyboardArrowRight />
          </div>
        </div>
        <div className="thumbs-container">
          {
            photos.map((photo, i) =>
              <Photo 
                key={photo.id} 
                photoId={photo.id} 
                index={i}
                selected={i === currentIndex} 
              />
            )
          }
        </div>
      </>
    );
  }
}

export default PhotoAlbum;
