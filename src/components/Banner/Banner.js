import React from 'react';

function Banner({ hasWon, guessCount, correctAnswer }) {
  if (hasWon) {
    return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{' '}{guessCount} guesses</strong>.
          </p>
        </div>
    )
  }

  return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
      </div>
  )
}

export default Banner;
