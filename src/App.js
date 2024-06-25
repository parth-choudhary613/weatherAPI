import React from 'react';
import Weather from './components/Weather';
import videoFile from './assets/myVideo.mp4';
import './App.css'; 

const App = () => {
  return (
    <div className='app'>
      <div className="video-container">
        <video className="myVideo" autoPlay loop muted >
          <source src={videoFile} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
        <div className="overlay">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
