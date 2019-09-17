import React from 'react';
import ReviewBox from './ReviewBox';
import ButtonInline from './ButtonInline';
import user5 from '../images/user-5.jpg';
import user6 from '../images/user-6.jpg';

const HotelReviews = () => {
    return (
        <div className="reviews">
            <ReviewBox
                reviewText={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
                }
                reviewAuthorName="Nick Smith"
                reviewDate="Feb 23rd, 2017"
                reviewAuthorImg={user5}
                reviewRating="7.8"
            />
            <ReviewBox
                reviewText={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
                }
                reviewAuthorName="Mary Thoms"
                reviewDate="Sep 12th, 2017"
                reviewAuthorImg={user6}
                reviewRating="9.3"
            />
            <ButtonInline>
                Show all <span>&rarr;</span>
            </ButtonInline>
        </div>
    );
};

export default HotelReviews;
