import React from 'react';

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Photo from '../Photo';
import '../../stylesheets/images.css';
import '../../stylesheets/PhotoAlbum.css';

const PhotoAlbum = ({ 
  currentIndex, 
  nextPhoto,
  photos,
  previousPhoto,
}) => (
  <>
    <div className="large-photo-row">
      <div 
        className={currentIndex > 0 ? 'prev-photo': 'prev-photo disabled'}
        onClick={previousPhoto}
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
        onClick={nextPhoto}
      >
        <KeyboardArrowRight />
      </div>
    </div>
    <div className="thumbs--container">
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

export default PhotoAlbum;
