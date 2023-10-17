import React from 'react';
import Banner from '../Banner/Banner';

function WonBanner({ numGuess }) {
  return (
    <Banner status='happy'>
      <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numGuess === 1 ? "1 guess" : `${numGuess} guesses`}</strong>
          .
        </p>
    </Banner>
  );
}

export default WonBanner;
