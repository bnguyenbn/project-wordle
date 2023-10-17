import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((num) => {
        const guess = checkGuess(guesses[num], answer)
        return (<Guess key={num} guess={guess}/>)
      })}
    </div>
  );
}

export default GuessResults;
