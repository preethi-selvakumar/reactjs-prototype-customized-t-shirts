import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedProducts from '../components/FeaturedProducts';
import LogoColorGuide from '../components/LogoColorGuide';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { isAuthenticated } = useAppContext();
    const navigate = useNavigate();

    const handleClick = () => {
        if (!isAuthenticated) {
            alert('Please sign in first.');
            navigate('/signin');
        }
    };

    return (
        <div onClick={handleClick}>
            <Navbar />
            <HeroSection />
            <FeaturedCategories />
            <FeaturedProducts />
            <LogoColorGuide />
            <Footer />
        </div>
    );
};

export default Home;
