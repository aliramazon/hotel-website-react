import React from 'react';

const ReviewBox = ({
    reviewText,
    reviewAuthorName,
    reviewDate,
    reviewAuthorImg,
    reviewRating
}) => {
    return (
        <figure className="review">
            <blockquote className="review__text">{reviewText}</blockquote>
            <figcaption className="review__author">
                <img
                    src={reviewAuthorImg}
                    alt={reviewAuthorName}
                    className="review__photo"
                />
                <div className="review__author-box">
                    <p className="review__author-name">{reviewAuthorName}</p>
                    <p className="review__author-date">{reviewDate}</p>
                </div>
                <div className="review__rating">{reviewRating}</div>
            </figcaption>
        </figure>
    );
};

export default ReviewBox;
