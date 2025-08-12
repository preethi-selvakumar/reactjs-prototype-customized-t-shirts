import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mergedProducts } from '../data/mergedProducts';
import { FaTimes } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

const ProductCustomize = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const { selectedLogo } = useAppContext();

    const product = mergedProducts.find(p => p.id === productId);

    // Show alert when entering customize page without a logo selected (first time)
    useEffect(() => {
        const alertShown = localStorage.getItem('initialAlertShown');

        if (!selectedLogo && alertShown !== 'true') {
            localStorage.setItem('initialAlertShown', 'true');

            // Alert slightly delayed for smoother load
            setTimeout(() => {
                alert('Please select logo input field');
            }, 500);
        }
    }, [selectedLogo]);

    // Show alert after returning from logo page (if logo selected)
    useEffect(() => {
        const logoInputClicked = localStorage.getItem('logoInputClicked');
        const logoClickAlertShown = localStorage.getItem('logoClickAlertShown');

        if (
            selectedLogo &&
            logoInputClicked === 'true' &&
            logoClickAlertShown !== 'true'
        ) {
            localStorage.setItem('logoClickAlertShown', 'true');

            setTimeout(() => {
                alert('Now click Submit button to proceed.');
            }, 500);
        }
    }, [selectedLogo]);

    if (!product) return <div>Product not found</div>;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!selectedLogo) {
            alert('Please select a logo before submitting.');
            return;
        }

        // Show alert before redirect
        alert(`Submitted with ${selectedLogo}`);

        // reset payNow alert flag so it shows again on next page
        localStorage.removeItem('payNowAlertShown');

        // Clean up all other localStorage flags
        localStorage.removeItem('logoInputClicked');
        localStorage.removeItem('logoClickAlertShown');
        localStorage.removeItem('initialAlertShown');

        // Delay navigation slightly to allow alert to show
        setTimeout(() => {
            navigate(`/product/${productId}`, { state: { fromCustomize: true } });
        }, 300);
    };

    return (
        <div className="customize-page-wrapper">
            <FaTimes
                className="close-icon top-right"
                onClick={() => navigate(-1)}
            />

            <div className="customize-preview">
                <img
                    src={product.mainImage}
                    alt="Product"
                    className="preview-image"
                />
            </div>

            <form className="customize-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Image :</label>
                    <input
                        type="text"
                        placeholder="Upload in png / jpg format"
                        readOnly
                    />
                </div>

                <div className="form-group">
                    <label>Add Logo :</label>
                    <input
                        type="text"
                        placeholder="Logo"
                        value={selectedLogo || ''}
                        readOnly
                        onClick={() => {
                            // Mark that user clicked logo input
                            localStorage.setItem('logoInputClicked', 'true');
                            // Navigate to logo selection page
                            navigate('/logo');
                        }}
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ProductCustomize;
