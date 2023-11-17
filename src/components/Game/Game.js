import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [guessIsRight, setGuessIsRight] = useState(false);

  return (<>
    {guessIsRight && <ResultBanner result="happy" />}
    {guesses.length === 6 && !guessIsRight && <ResultBanner result="sad" answer={answer} />}
    <Guesses guesses={guesses} answer={answer} setGuessIsRight={setGuessIsRight} />
    <GuessInput setGuesses={setGuesses} disabled={guessIsRight || guesses.length === 6} />
  </>);
}

export default Game;
