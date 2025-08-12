import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { allProducts } from '../data/products';

// Offer Banner Assets
import dazziGif from '../assets/images/running.gif';
import dazziLogo from '../assets/images/main-logo.gif';

const FeaturedProducts = () => {
    // Use the useAppContext hook to get the searchTerm
    const { searchTerm } = useAppContext();

    // A local state to manage the products to be displayed
    // Initially, this shows allProducts.
    const [productsToDisplay, setProductsToDisplay] = useState(allProducts);

    // This useEffect runs whenever the searchTerm changes.
    // It filters the products directly on the Home Page.
    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (searchTerm.trim() !== '') {
            // If there is a search term, filter and display allProducts
            const searchedProducts = allProducts.filter(product =>
                (product.label && product.label.toLowerCase().includes(lowerCaseSearchTerm)) ||
                (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))) ||
                (product.description && product.description.toLowerCase().includes(lowerCaseSearchTerm))
            );
            setProductsToDisplay(searchedProducts);
        } else {
            // If there's no search term, show allProducts again
            setProductsToDisplay(allProducts);
        }
    }, [searchTerm]);

    const handleOutOfStockClick = (productLabel) => {
        alert(`Sorry, the ${productLabel} is currently out of stock.`);
    };

    return (
        <>
            <div className="featured-products-container">
                <h2 className="fp-title">Featured Products</h2>
                <div className="fp-grid">
                    {/* Display products based on search term or default products */}
                    {productsToDisplay && productsToDisplay.length > 0 ? (
                        productsToDisplay.map((product) => {
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
                                        <p className="fp-price">{product.price}</p>
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
                        })
                    ) : (
                        // Show this message if there are no products in the search results
                        <div className="no-products-message">
                            <p>
                                {searchTerm.trim() !== ''
                                    ? "No products found matching your search."
                                    : "No featured products available."}
                            </p>
                        </div>
                    )}
                </div>
            </div>

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
        </>
    );
};

export default FeaturedProducts;