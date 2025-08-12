import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BrandsImage from '../assets/images/brands-logos.png';
import TeamImage from '../assets/images/our-team.png';
import StoryImage from '../assets/images/our-story.png';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-container">
                {/* About Dazzi */}
                <div className="about-section">
                    <h2>About Dazzi</h2>
                    <p>
                        There's a reason why Merchology is a leading source of custom company merchandise. Every part of our process is founded upon and supported by data. From logo-branded apparel, company outerwear, and custom employee uniforms, to corporate gift ideas and promotional items that people actually want to keep; we have the company merch system down to a science. Click <a href="https://www.merchology.com/blogs/merchology-blog/merchology-8th-anniversary" target="_blank" rel="noopener noreferrer">here</a> to learn more about the story and components behind the newly refreshed Dazzi logo design!
                    </p>

                    <p>
                        We are proud to offer the most expansive assortment of premium brands and merchandise in the industry, and we do your logo embellishment in-house with Dazzi employees and machines. Combine our in-house experts with beloved direct brand partnerships
                    </p>
                </div>

                {/* Brands You Love */}
                <div className="about-section">
                    <h2>Brands You Love</h2>
                    <p>
                        Our tagline is Your Logo + Brands You Love and for good reason. We've been working hard to build direct relationships with the world's leading brands to give you the best selection of premium and retail products in the industry. We always work with our unique brand partners to preserve brand integrity and follow all brand guidelines when it comes to customization. With Dazzi you can choose from over 300 of the world's most popular brands including:
                    </p>
                    <img src={BrandsImage} alt="Brands You Love" className="about-image" />
                </div>

                {/* Our Story */}
                <div className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Dazzi was founded by Richard (Dick) Ward, Andrew Ward, and Ally (Ward) Delgado, and opened its doors in early 2014. After 28 years in the corporate apparel industry, Dick's vision was to launch an e-commerce business model that made the gear ordering process faster, cheaper, and more transparent for businesses.
                    </p>
                    <p>
                        Dazzi is redefining quality and ease of ordering in the corporate apparel and gifts space. Over our last 9 years in business, we have provided co-branded merchandise to more than 65,000 companies worldwide, including 93% of the current Fortune 500.
                    </p>
                    <img src={StoryImage} alt="Our Story" className="about-image" />
                </div>

                {/* Our Team */}
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        You may have guessed it by reading the names of our founders…Dazzi is a family owned and operated business! When we launched Dazzi back in 2014, there were only 11 of us. Now we have a team of over 250+ employees between our Plymouth, Minnesota headquarters, and our Harrisburg, Pennsylvania facility! We believe that good people make good companies and we aim to grow strong every year to help serve you best
                    </p>
                    <img src={TeamImage} alt="Our Team" className="about-image" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
