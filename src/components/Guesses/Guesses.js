import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';

function Guesses({ guesses }) {
  return <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map(num => (
      <Guess key={num} guess={guesses ? guesses[num] : null} />
    ))}
  </div>;
}

export default Guesses;
