import React from 'react';
import HotelDescription from './HotelDescription';
import HotelReviews from './HotelReviews';

const HotelDetails = () => {
    return (
        <div className="details">
            <HotelDescription />
            <HotelReviews />
        </div>
    );
};

export default HotelDetails;
