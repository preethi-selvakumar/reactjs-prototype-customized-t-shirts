import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

import gifImage from '../assets/images/logo.gif';

// Logo imports
import logo1 from '../assets/images/logos/21.png';
import logo2 from '../assets/images/logos/1.png';
import logo3 from '../assets/images/logos/2.png';
import logo4 from '../assets/images/logos/3.png';
import logo5 from '../assets/images/logos/4.png';
import logo6 from '../assets/images/logos/5.png';
import logo7 from '../assets/images/logos/6.png';
import logo8 from '../assets/images/logos/81.png';
import logo9 from '../assets/images/logos/8.png';
import logo10 from '../assets/images/logos/9.png';
import logo11 from '../assets/images/logos/9-1.png';
import logo12 from '../assets/images/logos/10.png';
import logo13 from '../assets/images/logos/11.png';
import logo14 from '../assets/images/logos/14.png';
import logo15 from '../assets/images/logos/11-1.png';
import logo16 from '../assets/images/logos/13.png';
import logo17 from '../assets/images/logos/15.png';
import logo18 from '../assets/images/logos/17.png';
import logo19 from '../assets/images/logos/18.png';
import logo20 from '../assets/images/logos/19.png';

const logoImages = [
    logo1, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8,
    logo9, logo10, logo11, logo12,
    logo13, logo14, logo15, logo16,
    logo17, logo18, logo19, logo20,
];

const Logo = () => {
    const { setSelectedLogo } = useAppContext();
    const navigate = useNavigate();

    const handleLogoClick = (index) => {
        const isFromCustomize = localStorage.getItem('logoInputClicked') === 'true';

        if (isFromCustomize) {
            const logoName = `Logo ${index + 1}`;
            setSelectedLogo(logoName);

            alert('Logo selected! Returning to customize page...');

            navigate(-1);
        }
    };


    return (
        <>
            <Navbar />

            <div className="logo-header">
                <img src={gifImage} alt="gif" className="logo-gif" />
                <h1 className="logo-title">Want To customize Logo?</h1>
            </div>

            <div className="logo-section">
                <div className="logo-grid-container">
                    {logoImages.map((img, index) => (
                        <div
                            className="logo-card"
                            key={index}
                            onClick={() => handleLogoClick(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={img} alt={`logo-${index + 1}`} className="logo-image" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="explore-button-container">
                <button className="explore-button">Explore More</button>
            </div>

            <Footer />
        </>
    );
};

export default Logo;
