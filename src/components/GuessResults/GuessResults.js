import React from 'react';
import {range} from "../../utils";
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";
import {answer} from "../Game";

function GuessResults({ data }) {
    // console.log('GuessResults, data: ', data);
    // console.log('anser: ', answer)

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map(i => {
                const { value } = data[i] || {};
                const checkResult = checkGuess(value, answer);

                return <Guess key={i} word={value || ''} checkResult={checkResult} />;
            })}
        </div>
    );
}

export default GuessResults;
