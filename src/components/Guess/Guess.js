import React from "react";

function Guess({result,char}) {
	let findStatus = () => result.find(({letter}) => letter == char ).status
	let classes = result ? `cell ${findStatus()}` : 'cell'
	return <span className={classes}> {char} </span>
}

export default Guess;
