import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { glowProducts } from '../data/glowProducts';

// Offer Banner Assets
import dazziGif from '../assets/images/running.gif';
import dazziLogo from '../assets/images/main-logo.gif';

const GlowSection = () => {
    // Use the useAppContext hook to get the searchTerm
    const { searchTerm } = useAppContext();

    // A local state to manage the products to be displayed
    const [productsToDisplay, setProductsToDisplay] = useState(glowProducts);

    // This useEffect runs whenever the searchTerm changes.
    // It filters the products directly on the Home Page.
    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (searchTerm.trim() !== '') {
            // If there is a search term, filter and display glowProducts
            const searchedProducts = glowProducts.filter(product =>
                (product.label && product.label.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))) ||
                (product.description && product.description.toLowerCase().includes(lowerCaseSearchTerm))
            );
            setProductsToDisplay(searchedProducts);
        } else {
            // If there's no search term, show glowProducts again
            setProductsToDisplay(glowProducts);
        }
    }, [searchTerm]);

    const handleOutOfStockClick = (productLabel) => {
        alert(`Sorry, the ${productLabel} is currently out of stock.`);
    };

    const renderProductGrid = (products) => (
        <div className="fp-grid">
            {products.map((product) => {
                const isOutOfStock = product.badge === 'Out Stocks';

                const productCardContent = (
                    <>
                        <div className="fp-image-wrapper">
                            <span className={`fp-badge ${isOutOfStock ? 'out' : 'limited'}`}>
                                {product.badge}
                            </span>
                            <img src={product.mainImage} alt={product.label} />
                        </div>
                        <div className="fp-desc">
                            <p className="fp-label">{product.label}</p>
                            <p className="fp-sub">{product.sub}</p>
                            <p className="fp-price">₹{product.price}</p>
                        </div>
                    </>
                );

                return isOutOfStock ? (
                    <div
                        className="fp-card out-of-stock"
                        key={product.id}
                        onClick={() => handleOutOfStockClick(product.label)}
                        style={{ cursor: 'not-allowed' }}
                    >
                        {productCardContent}
                    </div>
                ) : (
                    <Link to={`/product/${product.id}`} className="fp-card" key={product.id}>
                        {productCardContent}
                    </Link>
                );
            })}
        </div>
    );

    // When displaying search results, pagination is not needed.
    // Directly render all products in `productsToDisplay`.
    const firstBatch = productsToDisplay.slice(0, 8);
    const secondBatch = productsToDisplay.slice(8, 16);

    return (
        <>
            {/* Display products based on search term or default batch */}
            {productsToDisplay.length > 0 ? (
                <>
                    {/* First batch */}
                    <div className="featured-products-container">
                        {renderProductGrid(firstBatch)}
                    </div>

                    {/* Offer Banner */}
                    <div className="fp-offer-banner">
                        <div className="fp-left">
                            <img src={dazziGif} alt="Dazzi" className="fp-gif" />
                            <img src={dazziLogo} alt="Dazzi Logo" className="fp-logo" />
                        </div>
                        <div className="fp-offer-text">
                            <h3>Grab The Exciting Offer</h3>
                            <p>Shop For Rs.999 and get 1 T-Shirt for <span>Free</span></p>
                        </div>
                        <div className="fp-limited-badge">
                            Limited <br /> Time
                        </div>
                    </div>
                    {/* Second batch of products only if productsToDisplay has enough items */}
                    {secondBatch.length > 0 && (
                        <div className="featured-products-container">
                            {renderProductGrid(secondBatch)}
                        </div>
                    )}
                </>
            ) : (
                // Show this message if there are no products in the search results
                <div className="no-products-message">
                    <p>
                        {searchTerm.trim() !== ''
                            ? "No Glow in the Dark products found matching your search."
                            : "No Glow in the Dark products available."}
                    </p>
                </div>
            )}
        </>
    );
};

export default GlowSection;