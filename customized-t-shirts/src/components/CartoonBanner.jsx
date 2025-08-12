import React from 'react';

import bgImage from '../assets/images/cartoon-banner.png';

const CartoonBanner = () => {
    return (
        <div className="cartoon-hero-section">
            <div
                className="cartoon-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="cartoon-hero-title">Add Your Favorite Cartoon On Your Shirt</h1>
            </div>
        </div>
    );
};

export default CartoonBanner;