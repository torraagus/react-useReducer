import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentB() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<span>Component B </span>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "increment", modifier: "B" })
				}
			>
				Increment
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "decrement", modifier: "B" })
				}
			>
				Decrement
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "reset", modifier: "B" })
				}
			>
				Reset
			</button>
		</div>
	);
}

export default ComponentB;
