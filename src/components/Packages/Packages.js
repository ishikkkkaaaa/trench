import React from 'react';
import './Packages.css';

const Packages = () => {
  return (
    <div className="packages">
      <div className="packages-container">
        <div className="package-card">
          <h2>Pro</h2>
          <p className="package-subtitle">Ideal for individual traders and crypto enthusiasts.</p>
          
          <div className="package-features">
            <div className="feature-item">
              <span>● Deploy multiple trading agents</span>
            </div>
            <div className="feature-item">
              <span>● Access core listeners (Telegram, X, Solana)</span>
            </div>
            <div className="feature-item">
              <span>● Generous monthly job execution volume</span>
            </div>
          </div>
          
          <button className="package-button">Start with Pro</button>
        </div>

        <div className="package-card">
          <h2>Enterprise</h2>
          <p className="package-subtitle">For professionals, funds, and businesses.</p>
          
          <div className="package-features">
            <div className="feature-item">
              <span>● Higher agent & job limits</span>
            </div>
            <div className="feature-item">
              <span>● Custom listener & data development</span>
            </div>
            <div className="feature-item">
              <span>● Dedicated account & priority support</span>
            </div>
          </div>
          
          <button className="package-button">Start with Enterprise</button>
        </div>
      </div>
    </div>
  );
};

export default Packages;