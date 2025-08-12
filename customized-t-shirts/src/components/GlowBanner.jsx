import React from 'react';

import bgImage from '../assets/images/glow-banner.png';
import gifImage from '../assets/images/thumb.gif'; 

const GlowBanner = () => {
    return (
        <div className="glow-hero-section">
            <div
                className="glow-hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="glow-left">
                    <img src={gifImage} alt="cartoon boy" className="glow-hero-gif" />
                </div>
                <div className="glow-right">
                    <h1 className="glow-hero-title">
                        Do You Want To Glow In Night ?<br />
                        Come Lets create it
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default GlowBanner;
