import React from 'react';
import {range} from "../../utils";

function Guess({ word, checkResult }) {
  console.log('Guess', word, checkResult);

  return <p className="guess">{range(5).map(i => {
    const className = checkResult ? `cell ${checkResult[i].status}` : 'cell';

    return <span key={i} className={className}>{word[i] || ''}</span>;
  })}</p>;
}

export default Guess;
