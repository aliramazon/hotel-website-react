import React from 'react';
import IconSVG from './IconSVG';

const SearchForm = () => {
    return (
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels" />
            <button className="search__button">
                <IconSVG iconName="icon-magnifying-glass" className="search__icon" />
            </button>
        </form>
    );
};

export default SearchForm;
