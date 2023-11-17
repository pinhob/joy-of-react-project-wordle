import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer, setGuessIsRight }) {
  const MAX_LETTERS_ALLOWED = 5;

  const guessResult = checkGuess(guess, answer);

  const isAnswerRight = guessResult?.every(guess => guess.status === 'correct');

  if (isAnswerRight) {
    setGuessIsRight(true);
  }

  return <p className='guess'>
    {range(MAX_LETTERS_ALLOWED).map(num => {
      let result = guessResult ? guessResult[num] : null;

      return <span className={`cell ${result ? result.status : ''}`} key={num}>{result?.letter}</span>
    })}
  </p>;
}

export default Guess;
