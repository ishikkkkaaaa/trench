import React, { useState } from 'react';
import './FeatureCarousel.css';
import carousel1 from '/Users/ishikakesarwani/lorem/src/assets/images/carousel1.png';
import carousel2 from '/Users/ishikakesarwani/lorem/src/assets/images/carousel2.png';
import carousel3 from '/Users/ishikakesarwani/lorem/src/assets/images/carousel3.png';

const FeatureCarousel = () => {
  const [activeTab, setActiveTab] = useState('Trenchers');

  const carouselData = {
    Trenchers: {
      title: 'Trenchers',
      features: [
        {
          title: 'Token Launch',
          description: 'Monitor new contract deployments and instantly snipe promising launches with custom validation rules.'
        },
        {
          title: 'Liquidity Watch',
          description: 'Track LP additions and execute trades when significant liquidity is added to target pairs.'
        },
        {
          title: 'Smart Timing',
          description: 'Analyze historical patterns to time entries and exits for maximum profitability.'
        }
      ],
      image: carousel1
    },
    'Liquid Funds': {
      title: 'Liquid Funds',
      features: [
        {
          title: 'Wallet Tracking',
          description: 'Follow and copy trades from successful wallets with customizable entry/exit rules.'
        },
        {
          title: 'Signal Processing',
          description: 'Convert Telegram signals into automated trades with risk management and position sizing.'
        },
        {
          title: 'Multi-Source Alpha',
          description: 'Combine signals from X, Telegram, and on-chain data to validate trading opportunities.'
        }
      ],
      image: carousel2
    },
    'Market Makers': {
      title: 'Market Makers',
      features: [
        {
          title: 'AI Market Analysis',
          description: 'Use LLMs to analyze market sentiment and adjust trading strategies in real-time.'
        },
        {
          title: 'Smart Risk Management',
          description: 'AI-powered position sizing and risk controls based on market conditions and volatility.'
        },
        {
          title: 'Intelligent Execution',
          description: 'LLM-driven order execution across multiple DEXs for optimal pricing and minimal impact.'
        }
      ],
      image: carousel3
    }
  };

  return (
    <section className="feature-carousel">
      <div className="carousel-tabs">
        {Object.keys(carouselData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <div className="carousel-content">
        <div className="content-left">
          <h2 className="content-title">{carouselData[activeTab].title}</h2>
          <div className="features-list">
            {carouselData[activeTab].features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="content-right">
          <img 
            src={carouselData[activeTab].image} 
            alt={carouselData[activeTab].title}
            className="carousel-image"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;