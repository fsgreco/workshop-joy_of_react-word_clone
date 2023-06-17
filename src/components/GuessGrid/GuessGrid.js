import React from "react";
import { range } from "../../utils";

import { checkGuess } from '../../game-helpers'
function GuessGrid({words, answer}) {
  return (
		<div className="guess-results">
			{range(6).map((_,rowIndx) => {
				const word = words[rowIndx] || ""
				let result = word ? checkGuess(word, answer) : null
				return <p key={rowIndx} className="guess">
					{ range(5).map((_,charIndx) => {
						let charResult = result ? result[charIndx] : null
						let classes = `cell ${charResult?.status ?? ''}`
						return <span 
							key={charIndx} 
							className={classes}>
								{word[charIndx]}
							</span>
					})}
				</p>
			})}
		</div>
	)
}

export default GuessGrid;
