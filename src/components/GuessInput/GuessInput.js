import React from "react";

function GuessInput({ HandleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  
  function HandleSubmit(event) {
    event.preventDefault();
    
    HandleSubmitGuess(guess);
    setGuess('')
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={HandleSubmit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        id='guess-input'
        type='text'
        required
        pattern='^.{5}$'
        title='Guess must be 5 characters'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      >
      </input>
    </form>
  );
}

export default GuessInput;
