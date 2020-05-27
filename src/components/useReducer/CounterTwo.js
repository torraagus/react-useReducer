import React, { useReducer } from "react";

const initialState = { firstCounter: 0, secondCounter: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, firstCounter: state.firstCounter + 1};
		case "decrement":
			return { ...state, firstCounter: state.firstCounter - 1 };
		case "increment2":
			return { ...state, secondCounter: state.secondCounter + 1 };
		case "decrement2":
			return { ...state, secondCounter: state.secondCounter - 1 };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<div>Count {count.firstCounter}</div>
			<button onClick={() => dispatch({ type: "increment" })}>Increment</button>
			<button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
			<div>Count {count.secondCounter}</div>
			<button onClick={() => dispatch({ type: "increment2" })}>Increment2</button>
			<button onClick={() => dispatch({ type: "decrement2" })}>Decrement2</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
}

export default CounterTwo;
