import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience<br />
        <span className="app-download-highlight">Download Tomato App</span>
      </p>
      <div className="app-download-platforms">
        <a href="#" className="platform-btn">
          <img src={assets.play_store} alt="Play Store" />
        </a>
        <a href="#" className="platform-btn">
          <img src={assets.app_store} alt="App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;