import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const filterOptions = {
        tags: ['Mens T shirt', 'Womens T shirt', 'Children Special'],
        colors: ['Green', 'Pink', 'Red', 'Blue'],
        sizes: ['Medium', 'Small', 'Large', 'Extra Large'],
        categories: ['Anime', 'Cartoon', 'Slogan', 'Funny']
    };

    const handleCheckboxChange = (group, item) => {
        const updateState = (prevState) => {
            if (prevState.includes(item)) {
                return prevState.filter((i) => i !== item);
            } else {
                return [...prevState, item];
            }
        };

        switch (group) {
            case 'tags':
                setSelectedTags(updateState);
                break;
            case 'colors':
                setSelectedColors(updateState);
                break;
            case 'sizes':
                setSelectedSizes(updateState);
                break;
            case 'categories':
                setSelectedCategories(updateState);
                break;
            default:
                break;
        }
    };

    const handleSubmit = () => {
        const filters = {
            tags: selectedTags,
            colors: selectedColors,
            sizes: selectedSizes,
            categories: selectedCategories,
        };
        onFilterChange(filters);
    };

    const handleClearAll = () => {
        setSelectedTags([]);
        setSelectedColors([]);
        setSelectedSizes([]);
        setSelectedCategories([]);
        onFilterChange({});
    };

    const renderFilterGroup = (title, items, selectedItems, groupName) => (
        <div className="filter-section">
            <h4 className="filter-title">{title}</h4>
            {items.map((item) => (
                <div className="filter-option" key={item}>
                    <input
                        type="checkbox"
                        id={`${groupName}-${item}`}
                        name={groupName}
                        value={item}
                        checked={selectedItems.includes(item)}
                        onChange={() => handleCheckboxChange(groupName, item)}
                    />
                    <label htmlFor={`${groupName}-${item}`}>{item}</label>
                </div>
            ))}
        </div>
    );

    return (
        <div className="filter-sidebar">
            <div className="filter-header">
                <h3 className="filter-heading">Filters</h3>
                <button className="clear-all-btn" onClick={handleClearAll}>
                    Clear All
                </button>
            </div>

            {renderFilterGroup('Tags', filterOptions.tags, selectedTags, 'tags')}
            {renderFilterGroup('Colour', filterOptions.colors, selectedColors, 'colors')}
            {renderFilterGroup('Size', filterOptions.sizes, selectedSizes, 'sizes')}
            {renderFilterGroup('Category', filterOptions.categories, selectedCategories, 'categories')}

            <button className="submit-btn" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default FilterSidebar;