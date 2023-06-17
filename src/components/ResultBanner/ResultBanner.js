import React from "react";
import RestartGameBtn from "../RestartGameBtn/RestartGameBtn";

function ResultBanner({wins, guessesNumber, answer = "", restartFn }) {
	if (wins) {
		return <div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in {' '}
				<strong>{guessesNumber} guesses</strong>.
				<RestartGameBtn restartFn={restartFn} />
			</p>
		</div>
	} else {
		return <div className="sad banner">
			<p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
			<RestartGameBtn restartFn={restartFn} />
		</div>
	}
}

export default ResultBanner;
