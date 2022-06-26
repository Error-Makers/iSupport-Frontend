import React from 'react';
import FeaturedCommunity from '../components/landing/components/FeaturedCommunity';
import Features from '../components/landing/components/Features';
import Hero from '../components/landing/components/Hero';
import Footer from '../components/Footer';
import TopComunity from '../components/TopComunity';
import Navbar from '../components/landing/components/NavBar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedCommunity />
      <Features />
      |<Footer />
    </>
  );
};

export default Home;
