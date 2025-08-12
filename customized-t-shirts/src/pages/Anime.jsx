import React from 'react';
import Navbar from '../components/Navbar';
import AnimeBanner from '../components/AnimeBanner';
import AnimeSection from '../components/AnimeSection';
import Footer from '../components/Footer';

const Anime = () => {
    return (
        <div>
            <Navbar />
            <AnimeBanner />
            <AnimeSection />
            <Footer />
        </div>
    );
};

export default Anime;
