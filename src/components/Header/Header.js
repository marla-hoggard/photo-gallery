import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import '../../stylesheets/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome() {
    this.props.hideUserView();
    this.props.setCurrentAlbum(null);
    this.props.setCurrentUser(null);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            color="inherit" 
            onClick={this.goHome}
            style={{ marginLeft: -12, marginRight: 10 }}>
            <CameraIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {this.props.headerText}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
