import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <p className="companion-text">YOUR TRENCHING COMPANION</p>
        <h1 className="main-title">
          Never Miss a Trade with
          <span className="brand-name">trench.surf</span>
        </h1>
        <p className="description">
          Intelligent trading automation for the trenches. Build your own AI powered trading agents, no coding required.
        </p>
        <div className="cta-buttons">
          <button className="telegram-btn">Join Telegram Group</button>
          <button className="access-btn">Get Early Access</button>
        </div>
      </div>
    </div>
  );
};

export default Header;