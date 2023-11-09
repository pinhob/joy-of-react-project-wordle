import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer }) {
  const MAX_LETTERS_ALLOWED = 5;

  const guessResult = checkGuess(guess, answer);

  return <p className='guess'>
    {range(MAX_LETTERS_ALLOWED).map(num => {
      let result = guessResult ? guessResult[num] : null;

      return <span className={`cell ${result ? result.status : ''}`} key={num}>{result?.letter}</span>
    })}
  </p>;
}

export default Guess;
