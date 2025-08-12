import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import ShopSection from './ShopSection';
import LogoSection from './LogoSection';
import { useAppContext } from '../context/AppContext';

const ShopContent = () => {
    const { applyFilters, setSearchTerm, productsToDisplay } = useAppContext();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const query = searchParams.get('search');
        setSearchTerm(query || '');
    }, [searchParams, setSearchTerm]);

    const handleFilterChange = (newFilters) => {
        applyFilters(newFilters);
        console.log('Applying filters:', newFilters);
    };

    return (
        <div className="shop-main-content">
            <FilterSidebar onFilterChange={handleFilterChange} />
            <div className="main-shop-and-logo-display">
                {productsToDisplay ? (
                    <ShopSection productsToDisplay={productsToDisplay} />
                ) : (
                    <p>Loading products...</p>
                )}
                <LogoSection />
            </div>
        </div>
    );
};

export default ShopContent;