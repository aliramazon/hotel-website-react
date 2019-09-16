import React from 'react';
import HotelGallery from './HotelGallery';
import HotelOverview from './HotelOverview.js';
import HotelDetails from './HotelDetails';

const HotelView = () => {
    return (
        <main className="hotel-view">
            <HotelGallery />
            <HotelOverview />
            <HotelDetails />
        </main>
    );
};

export default HotelView;
