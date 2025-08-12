import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

// Import images
import gpayLogo from '../assets/images/google-pay.png';
import phonepeLogo from '../assets/images/phonepe-logo.webp';
import upiLogo from '../assets/images/upi-logo.webp';

const PaymentConfirmationPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { clearCart } = useAppContext(); // Get clearCart from context
    const { state } = location; // Access state passed via navigate
    const { selectedPayment, totalAmount } = state || {};

    // Map payment methods to the imported image variables
    const paymentImages = {
        'Phone Pe': phonepeLogo,
        'Gpay': gpayLogo,
        'Upi': upiLogo
    };

    const displayImage = paymentImages[selectedPayment] || null;

    useEffect(() => {
        // Redirect to home if no payment data or total amount is present
        if (!selectedPayment || totalAmount === undefined) {
            navigate('/');
        }
    }, [selectedPayment, totalAmount, navigate]);

    // This function will now clear the cart and navigate to the ThankYouPage
    const handlePayNow = () => {
        alert("Payment Successful!");

        clearCart(); // Clear the cart and selected items
        navigate('/thank-you'); // Navigate to the Thank You page
    };

    if (!selectedPayment || totalAmount === undefined) return null;

    return (
        <div className="payment-confirmation-wrapper">
            <div className="payment-confirmation-container">
                {displayImage ? (
                    <img src={displayImage} alt={selectedPayment} className="payment-logo" />
                ) : (
                    <h1 className="payment-confirmation-heading">{selectedPayment}</h1>
                )}

                <div className="total-container">
                    <p className="total-due-text">Total Due:</p>
                    <p className="total-amount-display">₹{totalAmount}</p>
                </div>

                <button onClick={handlePayNow} className="pay-now-button">
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentConfirmationPage;