import React from 'react';
import hotel1 from '../images/hotel-1.jpg';
import hotel2 from '../images/hotel-2.jpg';
import hotel3 from '../images/hotel-3.jpg';

const HotelGallery = () => {
    return (
        <div className="gallery">
            <figure className="gallery__item">
                <img src={hotel1} alt="Hotel Paris" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={hotel2} alt="Hotel Tashkent" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={hotel3} alt="Hotel Samarkand" className="gallery__photo" />
            </figure>
        </div>
    );
};

export default HotelGallery;
