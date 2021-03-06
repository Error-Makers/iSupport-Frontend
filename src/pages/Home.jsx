import React from 'react';
import FeaturedCommunity from '../components/landing/components/FeaturedCommunity';
import Features from '../components/landing/components/Features';
import Hero from '../components/landing/components/Hero';
import Footer2 from '../components/Footer2';
import Navbar from '../components/landing/components/NavBar';
import Segment from '../components/landing/components/Segment';
import Stories from '../components/landing/components/Stories';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedCommunity />
      <Stories />
      <Segment />
      <Footer2 />
    </>
  );
};

export default Home;
