import React from 'react';

import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import youtubeIcon from '../assets/images/youtube.png';

const Footer = () => {
    return (
        <footer className="custom-footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ s</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Service</h4>
                    <ul>
                        <li>Mens T shirt</li>
                        <li>Womens T shirt</li>
                        <li>Sweat shirt</li>
                        <li>Drop Cut</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Explore</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Get in Touch with us</h4>
                    <p>Reach us :</p>
                    <p>support@dazzistores.com</p>
                </div>
            </div>

            <div className="footer-social">
                <h4>Connect With Us</h4>
                <div className="social-icons">
                    <div className="icon-circle">
                        <img src={facebookIcon} alt="Facebook" />
                    </div>
                    <div className="icon-circle">
                        <img src={youtubeIcon} alt="YouTube" />
                    </div>
                    <div className="icon-circle">
                        <img src={instagramIcon} alt="Instagram" />
                    </div>
                </div>
            </div>

            <p className="footer-note">
                Our site uses secure payment gateways. All major credit & debit cards accepted
            </p>
        </footer>
    );
};

export default Footer;
