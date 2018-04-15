import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// @import 'styles/App.scss';
// @import 'App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="moon-wrap"></div>
      <div className="moon"></div>
        <div className="space-content">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>
      </div>
    );
  }
}

export default App;
