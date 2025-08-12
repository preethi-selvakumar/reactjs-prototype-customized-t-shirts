import React from 'react';
import { useNavigate } from 'react-router-dom';

import checkmarkImage from '../assets/images/tick.png'; 

const ThankYouPage = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="thank-you-wrapper">
            <div className="thank-you-container">
                {/* Green checkmark image */}
                <img src={checkmarkImage} alt="Success Checkmark" className="checkmark-image" />

                <h1 className="thank-you-heading">Thank You</h1>
                <p className="order-status-text">Your Order has been Successfully Placed</p>
                <p className="shipping-info-text">Product will be Shipped in 3 working days</p>

                <button onClick={handleContinueShopping} className="continue-shopping-button">
                    Continue to Shopping
                </button>
            </div>
        </div>
    );
};

export default ThankYouPage;