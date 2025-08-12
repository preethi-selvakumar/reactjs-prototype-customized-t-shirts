import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch, FaBars } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';

import dazziLogo from '../assets/images/main-logo.gif';
import profileIcon from '../assets/images/profile.png';
import cartIcon from '../assets/images/cart.png';

const Navbar = () => {
    const {
        isMobileMenuOpen,
        toggleMobileMenu,
        cartCount,
        isAuthenticated,
        searchTerm,
        setSearchTerm
    } = useAppContext();

    const navigate = useNavigate();

    const handleCartClick = () => {
        if (cartCount > 0) {
            navigate('/payment');
        } else {
            alert('Your cart is empty. Please add a product first.');
        }
    };

    const handleProfileClick = () => {
        if (isAuthenticated) {
            alert('You are already signed in!');
        } else {
            navigate('/signin');
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        // Only navigate when the search term is not empty
        if (searchTerm.trim() !== '') {
            navigate(`/shop?search=${searchTerm}`);
        }
    };

    return (
        <div className="navbar">
            <img src={dazziLogo} alt="Dazzi Logo" className="main-logo" />
            <FaBars className="hamburger" onClick={toggleMobileMenu} />

            <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/logo">Logo</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                </div>

                <form className="search-box" onSubmit={handleSearchSubmit}>
                    <FaSearch onClick={handleSearchSubmit} style={{ cursor: 'pointer' }} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </form>

                <div className="icons">
                    <div className="profile-icon-wrapper" onClick={handleProfileClick} style={{ cursor: 'pointer' }}>
                        <img src={profileIcon} alt="Profile" className="icon-img" />
                    </div>

                    <div className="cart-icon-wrapper" onClick={handleCartClick} style={{ cursor: 'pointer' }}>
                        <img src={cartIcon} alt="Cart" className="icon-img" />
                        {cartCount > 0 && (
                            <span className="cart-count-badge">{cartCount}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;