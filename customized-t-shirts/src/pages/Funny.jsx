import React from 'react';
import Navbar from '../components/Navbar';
import FunnyBanner from '../components/FunnyBanner';
import FunnySection from '../components/FunnySection';
import Footer from '../components/Footer';

const Funny = () => {
    return (
        <div>
            <Navbar />
            <FunnyBanner />
            <FunnySection />
            <Footer />
        </div>
    );
};

export default Funny;
