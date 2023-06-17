import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { checkGuess } from '../../game-helpers'

function GuessGrid({words, answer}) {
  return (
		<div className="guess-results">
			{range(6).map( rowIndx => {
				const word = words[rowIndx] || ""
				let result = word ? checkGuess(word, answer) : null
				return <p key={rowIndx} className="guess">
					{ range(5).map( colIndx => (
						<Guess char={word[colIndx]} key={colIndx} result={result} />
					))}
				</p>
			})}
		</div>
	)
}

export default GuessGrid;
