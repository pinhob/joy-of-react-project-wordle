import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const MAX_LETTERS_ALLOWED = 5;

  return <p className='guess'>
    {range(MAX_LETTERS_ALLOWED).map(num => (
      <span className='cell' key={num}>{guess ? guess.guess[num] : ''}</span>
    ))}
  </p>;
}

export default Guess;
