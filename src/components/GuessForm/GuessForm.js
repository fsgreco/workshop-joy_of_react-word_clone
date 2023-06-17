import React from "react";

const inputStyle = { textTransform: 'uppercase' }

function GuessForm( {AddWordsCallback, disabled} ) {
	
	const [ input, setInput ] = React.useState('')
	
	// autofocus input on first render
	const textInput = React.useRef()
	React.useEffect(() => { textInput.current.focus() }, [])
	
	const handleInput = e => {
		e.preventDefault()
		AddWordsCallback( currentArray => [ ...currentArray, input ] )
		setInput('')
	}
  return <form onSubmit={handleInput} className="guess-input-wrapper">
		<label htmlFor="guess-input">Enter guess:</label>
		<input 
			ref={textInput} 
			disabled={Boolean(disabled)}
			value={input} 
			onChange={e => setInput(e.target.value.toUpperCase())} 
			id="guess-input" 
			type="text"
			style={inputStyle}
			pattern="[a-zA-Z]{5}"
			aria-label="5 charaters word"
			title="The word must have 5 characters. No more, no less. It can't contain numbers."
		/>
	</form>
}

export default GuessForm;
