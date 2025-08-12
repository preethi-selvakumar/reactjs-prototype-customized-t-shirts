import React from 'react';
import Navbar from '../components/Navbar';
import CartoonBanner from '../components/CartoonBanner';
import Footer from '../components/Footer';
import CartoonSection from '../components/CartoonSection';

const Cartoon = () => {
    return (
        <div>
            <Navbar />
            <CartoonBanner />
            <CartoonSection />
            <Footer />
        </div>
    );
};

export default Cartoon;
