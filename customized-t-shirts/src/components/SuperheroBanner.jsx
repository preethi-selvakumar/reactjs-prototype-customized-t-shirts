import React from 'react';
import bgImage from '../assets/images/superhero-banner.png'; 
import gifImage from '../assets/images/superhero.gif'; 

const SuperheroBanner = () => {
    return (
        <div className="superhero-hero-section">
            <div
                className="superhero-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <img src={gifImage} alt="superhero gif" className="superhero-hero-gif" />
                <div className="superhero-hero-text">
                    <h1>You Can be next superhero</h1>
                    <h2>Customize your Shirt Now</h2>
                </div>
            </div>
        </div>
    );
};

export default SuperheroBanner;
