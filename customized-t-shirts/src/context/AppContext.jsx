import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { shopProducts } from '../data/shopProducts';
import { mergedProducts } from '../data/mergedProducts';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // (Authentication, Logo, Cart, Checkout)
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem('user');
        return stored ? JSON.parse(stored) : null;
    });
    const signOutTimerRef = useRef(null);

    const startAutoSignOutTimer = () => {
        if (signOutTimerRef.current) clearTimeout(signOutTimerRef.current);
        signOutTimerRef.current = setTimeout(() => {
            alert('Session expired. You have been signed out.');
            signOut();
        }, 600000);
    };

    const signIn = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
        startAutoSignOutTimer();
    };

    const signOut = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        if (signOutTimerRef.current) {
            clearTimeout(signOutTimerRef.current);
            signOutTimerRef.current = null;
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            startAutoSignOutTimer();
        }
        return () => {
            if (signOutTimerRef.current) clearTimeout(signOutTimerRef.current);
        };
    }, [isAuthenticated]);

    const [selectedLogo, setSelectedLogoState] = useState(() => {
        return localStorage.getItem('selectedLogo') || '';
    });

    const setSelectedLogo = (logo) => {
        setSelectedLogoState(logo);
        if (logo) {
            localStorage.setItem('selectedLogo', logo);
        } else {
            localStorage.removeItem('selectedLogo');
        }
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    });

    const addToCartItems = (item) => {
        const updatedCart = [...cartItems, item];
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
        setCartCount(0);
    };

    const isProductAlreadyInCart = (newItem) => {
        return cartItems.some((item) => {
            return (
                item.product?.id === newItem.product?.id &&
                item.selectedColor?.name === newItem.selectedColor?.name &&
                item.selectedSize === newItem.selectedSize &&
                item.selectedNeck === newItem.selectedNeck &&
                item.selectedLogo === newItem.selectedLogo
            );
        });
    };

    const [cartCount, setCartCount] = useState(() => {
        return parseInt(localStorage.getItem('cartCount') || '0', 10);
    });

    useEffect(() => {
        const count = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
        setCartCount(count);
        localStorage.setItem('cartCount', count.toString());
    }, [cartItems]);

    const [checkoutInfo, setCheckoutInfo] = useState(null);
    const updateCheckoutInfo = (info) => {
        setCheckoutInfo(info);
    };

    const [customizedProductIds, setCustomizedProductIds] = useState(() => {
        const stored = localStorage.getItem('customizedProductIds');
        return stored ? JSON.parse(stored) : [];
    });

    const addCustomizedProductId = (productId) => {
        setCustomizedProductIds(prevIds => {
            if (!prevIds.includes(productId)) {
                const updated = [...prevIds, productId];
                localStorage.setItem('customizedProductIds', JSON.stringify(updated));
                return updated;
            }
            return prevIds;
        });
    };

    const finalizeCustomization = (cartItem) => {
        addToCartItems(cartItem);
        setSelectedLogo(null);
        addCustomizedProductId(cartItem.product.id);
    };

    // search & filtering logic
    const [productsToDisplay, setProductsToDisplay] = useState(shopProducts);

    // searchTerm state
    const [searchTerm, setSearchTerm] = useState('');
    const [currentFilters, setCurrentFilters] = useState({});

    useEffect(() => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        let baseList = searchTerm.trim() !== '' ? mergedProducts : shopProducts;

        const searchedList = baseList.filter(product =>
            (product.label && product.label.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (product.name && product.name.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))) ||
            (product.description && product.description.toLowerCase().includes(lowerCaseSearchTerm))
        );

        let finalFilteredList = searchedList;
        if (Object.keys(currentFilters).length > 0 &&
            Object.values(currentFilters).some(arr => arr.length > 0)) {
            finalFilteredList = searchedList.filter(product => {
                const tagsMatch = currentFilters.tags?.length > 0
                    ? currentFilters.tags.some(tag => product.tags?.includes(tag))
                    : true;
                const colorsMatch = currentFilters.colors?.length > 0
                    ? currentFilters.colors.some(color => product.colors?.some(pColor => pColor.name === color))
                    : true;
                const sizesMatch = currentFilters.sizes?.length > 0
                    ? currentFilters.sizes.some(size => product.sizeChart?.some(pSize => pSize.size === size))
                    : true;
                const categoriesMatch = currentFilters.categories?.length > 0
                    ? currentFilters.categories.some(cat => product.tags?.includes(cat))
                    : true;
                return tagsMatch && colorsMatch && sizesMatch && categoriesMatch;
            });
        }

        setProductsToDisplay(finalFilteredList);

    }, [searchTerm, currentFilters]);

    const applyFilters = (filters) => {
        setCurrentFilters(filters);
    };

    // end of search & filtering logic

    return (
        <AppContext.Provider
            value={{
                // Authentication
                isAuthenticated, user, signIn, signOut,

                // UI
                isMobileMenuOpen, toggleMobileMenu,

                // Logo
                selectedLogo, setSelectedLogo,

                // Cart
                cartItems, addToCartItems, removeFromCart, clearCart, cartCount, isProductAlreadyInCart, finalizeCustomization,

                // Customized products
                customizedProductIds, addCustomizedProductId,

                // Checkout
                checkoutInfo, updateCheckoutInfo,

                // Search and filtering
                productsToDisplay,
                applyFilters,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);