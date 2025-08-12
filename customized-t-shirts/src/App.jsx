import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription';
import About from './pages/About';
import SignInPage from './pages/SignInPage';
import ProductCustomize from './pages/ProductCustomize';
import Logo from './pages/logo';
import Shop from './pages/Shop';
import PaymentPage from './pages/PaymentPage';
import PaymentConfirmationPage from './pages/PaymentConfirmationPage';
import ThankYouPage from './pages/ThankYou';
import Anime from './pages/Anime';
import Superhero from './pages/Superhero';
import GlowInDark from './pages/GlowInDark';
import Cartoon from './pages/Cartoon';
import Slogan from './pages/Slogan';
import Funny from './pages/Funny';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:productId" element={<ProductDescription />} />
                <Route path="/about" element={<About />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/customize/:productId" element={<ProductCustomize />} />
                <Route path="/logo" element={<Logo />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/payment-confirmation" element={<PaymentConfirmationPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/themes/anime" element={<Anime />} />
                <Route path="/themes/superhero" element={<Superhero />} />
                <Route path="/themes/glow-in-dark" element={<GlowInDark />} />
                <Route path="/themes/cartoon" element={<Cartoon />} />
                <Route path="/themes/slogan" element={<Slogan />} />
                <Route path="/themes/funny" element={<Funny />} />

            </Routes>
        </Router>
    );
};

export default App;