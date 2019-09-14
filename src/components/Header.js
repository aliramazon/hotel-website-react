import React from 'react';
import SearchForm from './SearchForm';
import UserNavigation from './UserNavigation';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="trillo" className="logo" />
            <SearchForm />
            <UserNavigation />
        </header>
    );
};

export default Header;
