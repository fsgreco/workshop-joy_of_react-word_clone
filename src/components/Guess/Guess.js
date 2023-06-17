import React from "react";
import { range } from "../../utils";

function Cell({char, status}) {
	let classes = status ? `cell ${status}` : 'cell'
	return <span className={classes}> {char} </span>
}

function Guess({word = '', result}) {
	return (
	<p className="guess">
		{ range(5).map( colIndx => {
			let character = word[colIndx]
			let findStatus = char => result?.find(({letter}) => letter == char ).status
			return <Cell char={character} key={colIndx} status={findStatus(character)} />
		})}
	</p>
	)
}

export default Guess;
