import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

import '../stylesheets/Loader.css';

const Loader = ({ loadingText }) => (
  <>
  <CircularProgress 
    size={30}
    style={{ 
      display: 'inline-block',
      position: 'relative',
    }} />
    <p className="loader-text">
      {loadingText || 'Loading...'}
    </p>
    </>
);

export default Loader;
