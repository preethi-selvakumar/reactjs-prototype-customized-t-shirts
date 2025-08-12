import React from 'react';
import { Link } from 'react-router-dom'; 

import gifImage from '../assets/images/source.gif';
import bgImage from '../assets/images/hero-banner.png';

import animeImg from '../assets/images/Anime/13.jpg';
import superheroImg from '../assets/images/Super-hero/16.jpg';
import glowImg from '../assets/images/GID/1.jpg';
import cartoonImg from '../assets/images/Cartoon/22.jpg';
import sloganImg from '../assets/images/Slogan/14.jpg';
import funnyImg from '../assets/images/Funny/4.jpg';

// Add "route" field for each theme
const featuredItems = [
    { img: animeImg, label: 'Anime', route: '/themes/anime' },
    { img: superheroImg, label: 'Superhero', route: '/themes/superhero' },
    { img: glowImg, label: 'Glow in dark', route: '/themes/glow-in-dark' },
    { img: cartoonImg, label: 'Cartoon', route: '/themes/cartoon' },
    { img: sloganImg, label: 'Slogan', route: '/themes/slogan' },
    { img: funnyImg, label: 'Funny', route: '/themes/funny' },
];

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div
                className="hero-banner"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <img src={gifImage} alt="character gif" className="hero-gif" />
                <h1 className="hero-title">Customized T shirts</h1>
            </div>

            <div className="featured-section">
                <h2 className="featured-title">Featured Themes</h2>
                <div className="featured-items">
                    {featuredItems.map((item, index) => (
                        <Link to={item.route} key={index} className="featured-card-link">
                            <div className="featured-card">
                                <img src={item.img} alt={item.label} />
                                <p>{item.label}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
