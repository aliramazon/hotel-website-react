import React from 'react';
import HotelGallery from './HotelGallery';
import HotelOverview from './HotelOverview.js';
import HotelDetails from './HotelDetails';
import CTA from './CTA';

const HotelView = () => {
    return (
        <main className="hotel-view">
            <HotelGallery />
            <HotelOverview />
            <HotelDetails />
            <CTA />
        </main>
    );
};

export default HotelView;
