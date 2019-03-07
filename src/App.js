import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './AppBar/appBar';
import LatestVideos from './LatestVideos/latestVideos';
import TrailerVideos from './LatestVideos/trailers';
class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <LatestVideos/>
          <TrailerVideos/>
      </div>
    );
  }
}

export default App;
