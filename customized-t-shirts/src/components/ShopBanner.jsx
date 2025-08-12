import React from 'react';
import bgImage from '../assets/images/shop-banner.png';

const ShopBanner = () => {
    return (
        <div className="shop-hero-section">
            <div
                className="shop-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="shop-hero-title">
                    Customize Your Favourite <br /> Character On your shirt
                </h1>
            </div>
        </div>
    );
};

export default ShopBanner;