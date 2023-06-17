import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { checkGuess } from '../../game-helpers'

function GuessGrid({words, answer}) {
  return (
		<div className="guess-results">
			{range(6).map( rowIndx => {
				let word = words[rowIndx]
				let result = checkGuess(word, answer)
				return <Guess key={rowIndx} word={word} result={result} />
			})}
		</div>
	)
}

export default GuessGrid;
