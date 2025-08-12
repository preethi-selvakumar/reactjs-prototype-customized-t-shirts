import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const PaymentPage = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useAppContext();
    const [selectedPayment, setSelectedPayment] = useState(null);

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/');
        }
    }, [cartItems, navigate]);

    const handlePaymentSelection = (method) => {
        setSelectedPayment(method);
        alert(`Payment method selected: ${method}`);

        setTimeout(() => {
            const totalAmount = calculateTotalPrice();

            // navigate
            navigate('/payment-confirmation', {
                state: {
                    selectedPayment: method,
                    totalAmount: totalAmount
                }
            });
        }, 500);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((acc, item) => {
            const price = item.product?.price || 0;
            const qty = item.quantity || 1;
            const tax = Math.round(price * qty * 0.02);
            return acc + price * qty + tax;
        }, 0);
    };

    return (
        <div className="payment-page-wrapper">
            <h2 className="payment-heading">Make Payment</h2>

            <div className="payment-box">
                {cartItems.map((item, index) => {
                    const { product, selectedSize, selectedColor, quantity, selectedLogo } = item;
                    const price = product?.price || 0;
                    const tax = Math.round(price * quantity * 0.02);
                    const totalAmount = price * quantity + tax;

                    return (
                        <div className="payment-container product-item" key={index}>
                            <div className="payment-details-left">
                                <h3><u>Product {index + 1}</u></h3>
                                <p><strong>Name:</strong> {product?.label}</p>
                                <p><strong>Size:</strong> {selectedSize}</p>
                                <p><strong>Color:</strong> {selectedColor?.name}</p>
                                <p><strong>Quantity:</strong> {quantity}</p>
                                {selectedLogo && (
                                    <p><strong>Logo:</strong> {selectedLogo}</p>
                                )}
                                <p><strong>Price:</strong> ₹{price}</p>
                                <p><strong>Tax (2%):</strong> ₹{tax}</p>
                                <p><strong>Total:</strong> ₹{totalAmount}</p>

                                <button
                                    className="remove-btn"
                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to remove this item from cart?")) {
                                            removeFromCart(index);
                                        }
                                    }}
                                >
                                    Remove
                                </button>
                            </div>

                            <div className="payment-image-right">
                                {product?.mainImage && (
                                    <img src={product.mainImage} alt="Product" />
                                )}
                            </div>
                        </div>
                    );
                })}

                <h3 className="total-pay-amount">Total Payable Amount: ₹{calculateTotalPrice()}</h3>

                <div className="payment-options">
                    <h3><u>Choose Payment Method</u></h3>
                    {['Phone Pe', 'Gpay', 'Upi'].map((method, index) => (
                        <label
                            key={index}
                            className={`payment-radio ${selectedPayment === method ? 'selected' : ''}`}
                        >
                            <span className="payment-name">{method}</span>
                            <input
                                type="radio"
                                name="payment"
                                value={method}
                                checked={selectedPayment === method}
                                onChange={() => handlePaymentSelection(method)}
                            />
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;
