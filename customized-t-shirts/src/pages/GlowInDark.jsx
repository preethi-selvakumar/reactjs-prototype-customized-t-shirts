import React from 'react';
import Navbar from '../components/Navbar';
import GlowBanner from '../components/GlowBanner';
import Footer from '../components/Footer';
import GlowSection from '../components/GlowSection';

const Glow = () => {
    return (
        <div>
            <Navbar />
            <GlowBanner />
            <GlowSection />
            <Footer />
        </div>
    );
};

export default Glow;
