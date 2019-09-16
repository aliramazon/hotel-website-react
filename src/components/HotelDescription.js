import React from 'react';
import user1 from '../images/user-1.jpg';
import user2 from '../images/user-2.jpg';
import user3 from '../images/user-3.jpg';
import user4 from '../images/user-4.jpg';

const HotelDescription = () => {
    return (
        <div className="description">
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel facere blanditiis quis aut odit! Qui
                explicabo similique tempora ipsum. Quia quaerat, consectetur reprehenderit illum.
            </p>
            <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quam laboriosam voluptatem fugit loves
                me alot, velit.
            </p>
            <ul className="list">
                <li className="list__item">Close to the beach</li>
                <li className="list__item">Free airport shuttle</li>
                <li className="list__item">Air conditioning and heating</li>
                <li className="list__item">We speak all languages</li>
                <li className="list__item">Breakfast included</li>
                <li className="list__item">Free wifi in all rooms</li>
                <li className="list__item">Pets allowed</li>
                <li className="list__item">Perfect for families</li>
            </ul>
            <div className="recommend">
                <p className="recommend__count">Lucy and other 3 friends recommend this hotel</p>
                <div className="remommend__friends">
                    <img src={user1} alt="Friend 1" className="recommend__photo" />
                    <img src={user2} alt="Friend 2" className="recommend__photo" />
                    <img src={user3} alt="Friend 3" className="recommend__photo" />
                    <img src={user4} alt="Friend 4" className="recommend__photo" />
                </div>
            </div>
        </div>
    );
};

export default HotelDescription;
