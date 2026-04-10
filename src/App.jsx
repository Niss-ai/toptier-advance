import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FundingOptions from './components/FundingOptions';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FundingOptions />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTASection />
    </div>
  );
}
