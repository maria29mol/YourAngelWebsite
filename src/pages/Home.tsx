import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Blog from '../components/Blog';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Blog />
      <Stats />
      <CTA />
      <Footer />
    </>
  );
}