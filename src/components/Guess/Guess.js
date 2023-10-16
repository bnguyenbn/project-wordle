import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  console.log(guess)
  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span key={i} className="cell">
            {guess ? guess[i] : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
