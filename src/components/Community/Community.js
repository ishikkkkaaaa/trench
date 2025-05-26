import React from 'react';
import './Community.css';
import blobImage from '../../assets/images/image.png';

const Community = () => {
  return (
    <div className="community">
      <div className="community-container">
        <img src={blobImage} alt="" className="blob blob-left" />
        <div className="content">
          <h2>Join the Community</h2>
          <p>Join the trenchsurf Telegram community to connect with builders and trenchers using agents to automate their trading.</p>
          <a href="https://t.me/trenchsurf" className="join-button" target="_blank" rel="noopener noreferrer">
            Join Telegram
          </a>
        </div>
        <img src={blobImage} alt="" className="blob blob-right" />
      </div>
    </div>
  );
};

export default Community;