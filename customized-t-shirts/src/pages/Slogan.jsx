import React from 'react';
import Navbar from '../components/Navbar';
import SloganBanner from '../components/SloganBanner';
import SloganSection from '../components/SloganSection';
import Footer from '../components/Footer';

const Slogan = () => {
    return (
        <div>
            <Navbar />
            <SloganBanner />
            <SloganSection />
            <Footer />
        </div>
    );
};

export default Slogan;
