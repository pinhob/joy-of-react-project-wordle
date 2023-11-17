import React from 'react';

function ResultBanner({ result, answer }) {
  return (
    <div className={`${result} banner`}>
      {
        result === "happy"
          ? (<p><strong>Congratulations!</strong> Got it in <strong>3 guesses</strong>.</p>)
          : (<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>)
      }
    </div>
  );
}

export default ResultBanner;
