import React, { useState } from "react";
import Star from "./icon-star.svg";

function RatingCard({ onSubmitRating }) {
    const [selectedRating, setSelectedRating] = useState(null);

    return (
        <div className="rating-card">
            <img src={Star} alt="Star" className="star" />
            <h2>How did we do?</h2>
            <p>Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating-buttons">
                {[1, 2, 3, 4, 5].map((rating) => (
                    <button 
                        key={rating}
                        onClick={() => setSelectedRating(rating)} 
                        className={selectedRating === rating ? 'selected' : ''}
                    > 
                        {rating}
                    </button>
                ))}
            </div>
            <button onClick={() => onSubmitRating(selectedRating)}>SUBMIT</button>
        </div>
    );
}

export default RatingCard;