import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import FeatureCarousel from './components/FeatureCarousel/FeatureCarousel';
import Packages from './components/Packages/Packages';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <FeatureCarousel />
      <Packages />
    </div>
  );
}

export default App;
