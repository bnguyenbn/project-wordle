import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function HandleSubmitGuess(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput HandleSubmitGuess={HandleSubmitGuess} />
    </>
  );
}

export default Game;
