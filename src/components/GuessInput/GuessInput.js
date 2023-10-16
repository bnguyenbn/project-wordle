import React from "react";

function GuessInput({ HandleSubmitGuess }) {
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
