import React from 'react';
import Navbar from '../components/Navbar';
import ShopBanner from '../components/ShopBanner';
import ShopContent from '../components/ShopContent';
import Footer from '../components/Footer';

const Shop = () => {
    return (
        <div>
            <Navbar />
            <ShopBanner />
            <ShopContent />
            <Footer />
        </div>
    );
};

export default Shop;
