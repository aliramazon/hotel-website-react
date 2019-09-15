import React from 'react';
import IconSVG from './IconSVG';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="/" className="side-nav__link">
                        <IconSVG className="side-nav__icon" iconName="icon-home" />
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <IconSVG className="side-nav__icon" iconName="icon-aircraft-take-off" />
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <IconSVG className="side-nav__icon" iconName="icon-key" />
                        <span>Car rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="/" className="side-nav__link">
                        <IconSVG className="side-nav__icon" iconName="icon-map" />
                        <span>Tours</span>
                    </a>
                </li>
            </ul>
            <div className="legal">&copy; 2017 by Trillo. All rights reserved</div>
        </nav>
    );
};

export default Sidebar;
