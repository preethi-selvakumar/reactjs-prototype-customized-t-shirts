import React from 'react';
import bgImage from '../assets/images/slogan-banner.png';

const SloganBanner = () => {
    return (
        <div className="slogan-hero-section">
            <div
                className="slogan-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="slogan-hero-title">
                    Add Your Slogan Of your Choice <br /> On your Shirt
                </h1>
            </div>
        </div>
    );
};

export default SloganBanner;