import React from 'react';

import menOversized from '../assets/images/1.jpg';
import menTshirt from '../assets/images/3.jpg';
import menSweatshirt from '../assets/images/5.jpg';
import dropCut from '../assets/images/7.jpg';
import womenOversized from '../assets/images/2.jpg';
import womenTshirt from '../assets/images/4.jpg';
import womenSweatshirt from '../assets/images/6.jpg';
import sports from '../assets/images/8.jpg';

const categoryData = [
    { img: menOversized, label: 'Men Over sized' },
    { img: menTshirt, label: 'Men T shirt' },
    { img: menSweatshirt, label: 'Men Sweat Shirt' },
    { img: dropCut, label: 'Drop Cut' },
    { img: womenOversized, label: 'Women Over sized' },
    { img: womenTshirt, label: 'Women T shirt' },
    { img: womenSweatshirt, label: 'Women Sweat shirt' },
    { img: sports, label: 'Sports' },
];

const FeaturedCategories = () => {
    return (
        <div className="featured-categories">
            <h2 className="fc-title">Featured Categories</h2>
            <div className="fc-grid">
                {categoryData.map((item, index) => (
                    <div key={index} className="fc-card">
                        <img src={item.img} alt={item.label} />
                        <span className="fc-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;
