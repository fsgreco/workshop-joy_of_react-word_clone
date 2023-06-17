import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessForm from '../GuessForm'
import GuessGrid from '../GuessGrid'
import ResultBanner from '../../components/ResultBanner'

function Game() {
	
	// Pick a random word on every mount.
	const [ answer, setAnswer ] = React.useState( sample(WORDS) )
	const [ words, setWords ] = React.useState([])
	console.info({ answer });
	
	const restartGameFn = () => {
		setAnswer( sample(WORDS) )
		setWords([])
	}

	let canStillPlay = words.length < NUM_OF_GUESSES_ALLOWED
	let checkWin = words.includes(answer)

  return <>
		<GuessGrid words={words} answer={answer} />
		<GuessForm disabled={!canStillPlay || checkWin } AddWordsCallback={setWords} />

		{ checkWin && <ResultBanner wins guessesNumber={words.length} restartFn={restartGameFn} /> }
		{!canStillPlay && !checkWin && <ResultBanner wins={false} guessesNumber={words.length} answer={answer} restartFn={restartGameFn}/> }
	</>
}

export default Game;
