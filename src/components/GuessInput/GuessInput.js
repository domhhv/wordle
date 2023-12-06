import React from 'react';

function GuessInput({ onSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert('The word should consists of exactly 5 letters');
      return null;
    }

    console.log({guess});

    onSubmit(guess);

    setGuess('');
  };

  const handleChange = event => {
    setGuess(event.target.value.toUpperCase());
  }

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input disabled={disabled} required minLength={5} maxLength={5} id="guess-input" onChange={handleChange} value={guess} />
      </form>
  );
}

export default GuessInput;
