import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  return (
    <span className={`cell ${status ? status : ""}`}>
      {letter ? letter : ""}
    </span>
  );
}

function Guess({ guess }) {

  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <Cell
            key={i}
            letter={guess ? guess[i].letter : undefined}
            status={guess ? guess[i].status : undefined}
          />
        );
      })}
    </p>
  );
}

export default Guess;
