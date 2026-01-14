
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Segments from './components/Segments';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactCTA from './components/ContactCTA';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#EDEDED] selection:bg-[#F7931E] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Segments />
        <Services />
        <AboutUs />
        <ContactCTA />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
