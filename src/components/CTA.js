import React from 'react';

const CTA = () => {
    return (
        <div className="cta">
            <h2 className="cta__book-now">
                Good news! We have 4 free rooms for your selected dates!
            </h2>
            <ButtonCTA />
        </div>
    );
};

const ButtonCTA = () => {
    return (
        <button className="btn">
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">Only 4 rooms left</span>
        </button>
    );
};

export default CTA;
