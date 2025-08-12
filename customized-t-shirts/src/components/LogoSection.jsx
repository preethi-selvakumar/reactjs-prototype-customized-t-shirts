import React from 'react';
import { logoProducts } from '../data/logoProducts';

const LogoSection = () => {
    const renderProductGrid = (products) => (
        <div className="shop-grid">
            {products.map((product) => {
                const isOutOfStock = product.badge === 'Out Stocks';

                const productCardContent = (
                    <>
                        <div className="shop-image-wrapper">
                            {/* Display the badge if present */}
                            {product.badge && (
                                <span className={`shop-badge ${isOutOfStock ? 'out' : 'limited'}`}>
                                    {product.badge}
                                </span>
                            )}
                            {/* Display the mainImage, which is now the logo itself */}
                            <img src={product.mainImage} alt={product.label} className="main-logo-image" />
                        </div>
                        <div className="shop-desc">
                            <p className="shop-label">{product.label}</p>
                            <p className="shop-price">₹{product.price}</p>
                        </div>
                    </>
                );

                return (
                    <div className={`shop-card ${isOutOfStock ? 'out-of-stock-display' : ''}`} key={product.id}>
                        {productCardContent}
                    </div>
                );
            })}
        </div>
    );

    // Now, check if logoProducts data exists
    const firstRowProducts = logoProducts.slice(0, 3);
    const secondRowProducts = logoProducts.slice(3, 6);

    return (
        <div className="logo-section-container">
            <h2 className="section-title">Want to customize Logo?</h2>
            {/* Only render if data exists */}
            {logoProducts.length > 0 && (
                <>
                    {renderProductGrid(firstRowProducts)}
                    {renderProductGrid(secondRowProducts)}
                </>
            )}
            <div className="explore-more-container">
                <button className="explore-more-btn">
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default LogoSection;