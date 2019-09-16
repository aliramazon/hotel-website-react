import React from 'react';
import IconSVG from './IconSVG';

const HotelOverview = () => {
    return (
        <div className="overview">
            <h1 className="overview__heading">Hotel Las Palmas</h1>
            <div className="overview__stars">
                <IconSVG className="overview__stars-icon" iconName="icon-star" />
                <IconSVG className="overview__stars-icon" iconName="icon-star" />
                <IconSVG className="overview__stars-icon" iconName="icon-star" />
                <IconSVG className="overview__stars-icon" iconName="icon-star" />
                <IconSVG className="overview__stars-icon" iconName="icon-star" />
            </div>
            <div className="overview__location">
                <IconSVG className="overview__location-icon" iconName="icon-location-pin" />
                <button className="button-inline">Tashkent, Uzbekistan</button>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
            </div>
        </div>
    );
};

export default HotelOverview;
