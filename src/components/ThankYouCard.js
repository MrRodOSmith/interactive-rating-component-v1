import React from 'react';
import Thanks from './illustration-thank-you.svg'

function ThankYouCard({ rating }) {
    return (
        <div className='thank-you-card'>
            <img src={Thanks} alt="Thank You" />
            <h2>Thank You!</h2>
            <p className='your-selection'>You selected {rating} out of 5.</p>
            <p className='thanks-text'>
                We appreciate your feedback you taking the time to give a rating.<br />
                If you ever need more support, don't hesitate to get in touch.
            </p>
        </div>
    );
}

export default ThankYouCard;