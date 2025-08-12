import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { mergedProducts } from '../data/mergedProducts';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';

const ProductDescription = () => {
    const { productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        selectedLogo,
        isProductAlreadyInCart,
        finalizeCustomization
    } = useAppContext();

    const [product, setProduct] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedNeck, setSelectedNeck] = useState(null);

    useEffect(() => {
        const fromCustomize = location.state?.fromCustomize;
        const alertShown = localStorage.getItem('payNowAlertShown');

        if (fromCustomize && alertShown !== 'true') {
            localStorage.setItem('payNowAlertShown', 'true');
            setTimeout(() => {
                alert('Now proceed to Pay Now button.');
            }, 500);
        }
    }, [location.state]);

    useEffect(() => {
        const foundProduct = mergedProducts.find(p => p.id === productId);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedColor(foundProduct.colors[0]);
            setSelectedSize(foundProduct.sizeChart[0].size);
            setQuantity(1);
            setTotalPrice(foundProduct.price);
            setSelectedNeck(foundProduct.neckDesigns[0]);
        }
    }, [productId]);

    useEffect(() => {
        if (product) {
            setTotalPrice(product.price * quantity);
        }
    }, [quantity, product]);

    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity(prev => prev + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handlePayNow = () => {
        const cartItem = {
            product,
            selectedColor,
            selectedSize,
            selectedNeck,
            quantity,
            selectedLogo,
        };

        if (isProductAlreadyInCart(cartItem)) {
            alert('This product is already in your cart.');
            return;
        }

        // Use the new finalizeCustomization function
        // This single function now adds the product to cart and clears the selectedLogo
        finalizeCustomization(cartItem);

        alert('Product added to cart');

        // Cleanup localStorage flags to ensure correct behavior on future customizations
        localStorage.removeItem('initialAlertShown');
        localStorage.removeItem('logoInputClicked');
        localStorage.removeItem('logoClickAlertShown');

        navigate('/payment');
    };

    if (!product) {
        return <div className="product-description-page">Product not found or loading...</div>;
    }

    return (
        <>
            <Navbar />

            <div className="product-description-page">
                {/* Product Main Details */}
                <div className="product-main-details">
                    <div className="product-image-container">
                        <img src={product.mainImage} alt={product.label} className="product-main-image" />
                    </div>
                    <div className="product-details-content">
                        <h1 className="product-title">{product.label}</h1>
                        <div className="product-description">
                            <h3>Product Description:-</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>

                {/* Size Chart */}
                <div className="size-chart-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Chest</th>
                                <th>Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.sizeChart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.size}</td>
                                    <td>{item.chest}</td>
                                    <td>{item.length}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Color Options */}
                <div className="customize-colors-section">
                    <h4 className="customize-title">Customize Color T shirt</h4>
                    <div className="color-options-preview">
                        {product.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-option-preview ${selectedColor?.name === color.name ? 'active' : ''}`}
                                onClick={() => setSelectedColor(color)}
                            >
                                <img src={color.image} alt={color.name} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Options */}
                <div className="product-options-section">
                    <h3>{product.label}</h3>

                    <div className="option-row">
                        <label>Select Color :</label>
                        <div className="color-selector">
                            {product.colors.map((color, index) => (
                                <span
                                    key={index}
                                    className={`color-dot ${selectedColor?.name === color.name ? 'active' : ''}`}
                                    style={{ backgroundColor: color.hex }}
                                    onClick={() => setSelectedColor(color)}
                                ></span>
                            ))}
                        </div>
                    </div>

                    <div className="option-row">
                        <label>Select Size :</label>
                        <div className="size-selector">
                            {product.sizeChart.map((item, index) => (
                                <span
                                    key={index}
                                    className={`size-option ${selectedSize === item.size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(item.size)}
                                >
                                    {item.size}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="option-row">
                        <label>Quantity :</label>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange('decrement')}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleQuantityChange('increment')}>+</button>
                        </div>
                    </div>

                    <div className="option-row">
                        <label>Total Price :</label>
                        <p className="total-price">{totalPrice} + Tax</p>
                    </div>

                    <div className="option-row">
                        <label>Shirt Neck Design :</label>
                        <div className="neck-design-selector">
                            {product.neckDesigns.map((neck, index) => (
                                <span
                                    key={index}
                                    className={`neck-option ${selectedNeck === neck ? 'active' : ''}`}
                                    onClick={() => setSelectedNeck(neck)}
                                >
                                    {neck}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Customize Link */}
                {/* The "Customize more" link will now be correctly visible because selectedLogo is cleared after a purchase */}
                {/* Show customize link only if no logo is currently selected. This allows a user to customize any product at any time. */}
                {!selectedLogo && (
                    <div className="customize-link-container">
                        <p>
                            Want to customize more{' '}
                            <Link to={`/customize/${product.id}`} className="customize-link">click Here</Link>
                        </p>
                    </div>
                )}

                {/* Pay Now Button */}
                <div className="pay-now-button-container">
                    <button className="pay-now-button" onClick={handlePayNow}>
                        Pay Now
                    </button>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDescription;