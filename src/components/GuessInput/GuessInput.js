import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    const formattedInput = input.toUpperCase();

    setGuess(formattedInput);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ guess })
  }

  return (<form className="guess-input-wrapper" onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
      id="guess-input"
      type="text"
      value={guess}
      onChange={handleInput}
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word" />
  </form>);
}

export default GuessInput;
