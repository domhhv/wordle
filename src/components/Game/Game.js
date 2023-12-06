import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [hasWon, setHasWon] = React.useState(false);
    const isGameOver = guesses.length === 6 || hasWon;

    const handleSubmit = (newGuess) => {
        if (guesses.length < 7) {
            const nextGuesses = [...guesses, {
                value: newGuess,
                id: Math.random()
            }];

            setGuesses(nextGuesses);

            setHasWon(newGuess === answer);
        } else {

        }
    }

    return (
        <>
            <GuessResults data={guesses} />
            <GuessInput onSubmit={handleSubmit} disabled={isGameOver} />
            {isGameOver && (
                <Banner hasWon={hasWon} guessCount={guesses.length} correctAnswer={answer} />
            )}
        </>
    );
}

export default Game;
