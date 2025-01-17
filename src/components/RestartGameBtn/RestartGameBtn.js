import React from "react";

let Vector = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 14C7.50963 15.0039 8.37532 15.8345 9.46665 16.3667C10.558 16.8989 11.8158 17.1038 13.0506 16.9505C15.0687 16.7 16.4753 15.3884 18 14.1814M18 17V14H15M17 10C16.4904 8.99609 15.6247 8.16548 14.5334 7.63331C13.442 7.10113 12.1842 6.89624 10.9494 7.04949C8.93127 7.29995 7.52468 8.61162 6 9.81861M6 7V10H9" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>


const restartBtnStyles = {
	padding: '5px 10px',
	border: '1px solid black',
	borderRadius: '3px',
	marginInline: '1em',
	color: '#333',
	display: 'inline-flex',
	alignItems: 'center',
	verticalAlign: 'middle',
	backgroundColor: 'whitesmoke'
}
function RestartGameBtn({restartFn}) {

  return <button onClick={restartFn} style={restartBtnStyles}><Vector /> Restart</button>;
}

export default RestartGameBtn;




