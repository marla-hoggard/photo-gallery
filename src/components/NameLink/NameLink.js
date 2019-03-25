import React, { Component } from 'react';

import '../../stylesheets/NameLink.css';

class NameLink extends Component {
  constructor(props) {
    super(props);
    this.goToUser = this.goToUser.bind(this);
  }

  goToUser() {
    this.props.setCurrentUser(this.props.userDetails.id);
    this.props.showUserView();
    this.props.setCurrentPhoto(0);
  }

  render() {
    return (
      <span 
        className="name-link"
        onClick={this.goToUser}
      >
        {this.props.userDetails.name}
      </span>
    );
  }
}

export default NameLink;
