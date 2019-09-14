import React from 'react';
import IconSVG from './IconSVG';
import user from '../images/user.jpg';

const UserNavigation = () => {
    return (
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <IconSVG className="user-nav__icon" iconName="icon-bookmark" />
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <IconSVG className="user-nav__icon" iconName="icon-chat" />
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src={user} alt="Jonas" className="user-nav__user-photo" />
                <span className="user-nav__user-name">Jonas</span>
            </div>
        </nav>
    );
};

export default UserNavigation;
