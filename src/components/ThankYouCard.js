import React from 'react'

function ThankYouCard({ rating }) {
    return (
        <div className='thank-you-card'>
            <h2>Thank You!</h2>
            <p>You selected {rating} out of 5.</p>
            <p>We appreciate your feedback.</p>
        </div>
    );
}

export default ThankYouCard;