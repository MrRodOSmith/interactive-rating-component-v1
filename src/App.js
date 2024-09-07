import React, { useState } from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';
import './styles.css';

function App() {
  const [submittedRating, setSubmittedRating] = useState(null);

  return (
    <div className="App">
      {/* <h1>Interactive Rating Component</h1> */}
      {submittedRating === null ? (
        <RatingCard onSubmitRating={(rating) => setSubmittedRating(rating)} />
      ) : (
        <ThankYouCard rating={submittedRating} />
      )}
    </div>
  );
}

export default App;
