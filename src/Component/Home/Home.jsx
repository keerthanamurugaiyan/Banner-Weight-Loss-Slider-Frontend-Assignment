import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import WeightLossCalculator from '../WeightLossCalculator/WeightLossCalculator';

const Home = () => {
  return (
    <>
      <div className="home-wrapper">
        <Navbar />
        <HeroSection />
      </div>
      <WeightLossCalculator />
    </>
  );
};

export default Home;