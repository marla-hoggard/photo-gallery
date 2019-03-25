import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../stylesheets/Loader.css';

const Loader = ({ loadingText }) => (
  <div className="loader-div">
    <CircularProgress 
      size={30}
      style={{ 
        display: 'inline-block',
        position: 'relative',
      }} 
    />
    <p className="loader-text">
      {loadingText || 'Loading...'}
    </p>
  </div>
);

export default Loader;
