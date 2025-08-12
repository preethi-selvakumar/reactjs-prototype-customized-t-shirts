import React from 'react';
import logoColorImage from '../assets/images/logo-guide-image.png'; 

const LogoColorGuide = () => {
    return (
        <>
            <div className="logo-color-guide">
                <div className="logo-heading-section">
                    <h2>What Color Shirt Will My Logo Go With?</h2>
                    <div className="logo-image-wrapper">
                        <img
                            src={logoColorImage}
                            alt="Logo and Color Guide"
                            className="logo-guide-img"
                        />
                    </div>
                    <h3>Logo and Clothing Color Combinations That Work</h3>
                    <p>
                        When shopping for custom branded merch or talking with your designer about a new color palette
                        for your company, it's very important to start by finding a brand color scheme and logo color
                        palette. Graphic designers know how to create brand colors and find the best color combinations
                        for company logos, one of the most crucial features of a brand refresh or corporate merchandise
                        buy.
                    </p>
                </div>

                <div className="faq-section">
                    <h3>FAQs</h3>

                    <div className="faq-item">
                        <strong>1. Order Overview</strong>
                        <p>
                            By choosing Full Service Proofing during checkout, you agree to approve your proof within
                            24 hours of receipt to avoid order delays. If you do not provide feedback within 48 hours of
                            receiving your proof, your logo will be auto-approved and sent into production.
                        </p>
                    </div>

                    <div className="faq-item">
                        <strong>2. Can I edit my logo?</strong>
                        <p>
                            If you have selected our “Full Service” option at checkout, you will receive an email
                            notifying you that your proof is available to review approximately 2-3 days after placing
                            the order. From there, if any edits are required to the design, you can request the edits
                            directly using that same link.
                        </p>
                    </div>

                    <div className="faq-item">
                        <strong>3. Do you keep my Art work on file?</strong>
                        <p>
                            Yes. We keep your artwork on file to make reordering and using your logo on future products
                            as easy as possible. Previously approved proofs can be selected for use on new orders when
                            “Logo on File” is selected before adding items to your shopping cart.
                        </p>
                    </div>

                    <div className="faq-item">
                        <strong>4. What printing method do you use?</strong>
                        <p>
                            When opting for the Printing decoration method for your order, Merchology Customer Success
                            experts will select the best-fitting print method between screen-printing or direct apparel
                            printing. You can find more about these methods in our Help Center.
                        </p>
                    </div>

                    <div className="faq-item">
                        <strong>5. How long does it take to deliver?</strong>
                        <p>
                            All orders ship from our facilities in either Minnesota or Pennsylvania. The production time
                            estimated for your order is the same no matter domestic or international shipping, however
                            transit time to international addresses will be longer and dependent on the country of
                            destination. Expect an additional 5-7 business days time before delivery with standard
                            international shipping.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoColorGuide;
