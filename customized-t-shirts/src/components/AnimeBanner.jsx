import React from 'react';

import bgImage from '../assets/images/anime-banner.png';
import gifImage from '../assets/images/thumb.gif';

const AnimeBanner = () => {
    return (
        <div className="anime-hero-section">
            <div
                className="anime-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <img src={gifImage} alt="character gif" className="anime-hero-gif" />
                <h1 className="anime-hero-title">Add Your Favorite Anime Character On Your Shirt</h1>
            </div>
        </div>
    );
};

export default AnimeBanner;
