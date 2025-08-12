import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ShopSection = ({ productsToDisplay }) => {
    const navigate = useNavigate();

    const handleOutOfStockClick = (productLabel) => {
        alert(`Sorry, the ${productLabel} is currently out of stock.`);
    };

    const handleExploreMoreClick = () => {
        navigate('/shop?all=true'); 
    };

    const renderProductGrid = (products) => (
        <div className="shop-grid">
            {products.map((product) => {
                const isOutOfStock = product.badge === 'Out Stocks';

                const productCardContent = (
                    <>
                        <div className="shop-image-wrapper">
                            <span className={`shop-badge ${isOutOfStock ? 'out' : 'limited'}`}>
                                {product.badge}
                            </span>
                            <img src={product.mainImage} alt={product.label} />
                        </div>
                        <div className="shop-desc">
                            <p className="shop-label">{product.label}</p>
                            <p className="shop-sub">{product.sub}</p>
                            <p className="shop-price">₹{product.price}</p>
                        </div>
                    </>
                );

                return isOutOfStock ? (
                    <div
                        className="shop-card out-of-stock"
                        key={product.id}
                        onClick={() => handleOutOfStockClick(product.label)}
                        style={{ cursor: 'not-allowed' }}
                    >
                        {productCardContent}
                    </div>
                ) : (
                    <Link to={`/product/${product.id}`} className="shop-card" key={product.id}>
                        {productCardContent}
                    </Link>
                );
            })}
        </div>
    );

    return (
        <div className="shop-section-container">
            {productsToDisplay && productsToDisplay.length > 0 ? (
                renderProductGrid(productsToDisplay)
            ) : (
                <div className="no-products-message">
                    <p>No products found matching your search or filters.</p>
                </div>
            )}
            {/* Explore More btn */}
            <div className="explore-more-container">
                <button className="explore-more-btn" onClick={handleExploreMoreClick}>
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default ShopSection;