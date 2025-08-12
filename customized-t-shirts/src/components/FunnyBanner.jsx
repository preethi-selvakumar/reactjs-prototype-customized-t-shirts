import React from 'react';
import bgImage from '../assets/images/funny-banner.png';

const FunnyBanner = () => {
    return (
        <div className="funny-hero-section">
            <div
                className="funny-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="funny-hero-title">
                    Looking For Funny T shirts ? <br /> Customize Now
                </h1>
            </div>
        </div>
    );
};

export default FunnyBanner;