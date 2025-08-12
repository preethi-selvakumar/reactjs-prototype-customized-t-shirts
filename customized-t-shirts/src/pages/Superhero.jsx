import React from 'react';
import Navbar from '../components/Navbar';
import SuperheroBanner from '../components/SuperheroBanner';
import Footer from '../components/Footer';
import SuperHeroSection from '../components/SuperHeroSection';

const Superhero = () => {
    return (
        <div>
            <Navbar />
            <SuperheroBanner />
            <SuperHeroSection />
            <Footer />
        </div>
    );
};

export default Superhero;
