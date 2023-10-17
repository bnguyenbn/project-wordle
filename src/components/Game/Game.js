import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function HandleSubmitGuess(newGuess) {
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (newGuess === answer) {
      setGameStatus("won");
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        HandleSubmitGuess={HandleSubmitGuess}
      />
      {gameStatus === 'won' && <WonBanner numGuess={guesses.length}/>}
      {gameStatus === 'lost' && <LostBanner answer={answer}/>}
    </>
  );
}

export default Game;
