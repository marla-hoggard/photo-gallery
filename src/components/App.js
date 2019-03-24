import React, { Component } from 'react';

import logo from '../logo.svg';
import '../stylesheets/App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAlbums();
    this.props.getPhotos();
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. {this.props.something}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
