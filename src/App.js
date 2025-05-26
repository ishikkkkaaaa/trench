import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import FeatureCarousel from './components/FeatureCarousel/FeatureCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <FeatureCarousel />
    </div>
  );
}

export default App;
