import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentC() {
	const countContext = useContext(CountContext);
	return (
		<div>
			<span>Component C </span>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "increment", modifier: "C" })
				}
			>
				Increment
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "decrement", modifier: "C" })
				}
			>
				Decrement
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "reset", modifier: "C" })
				}
			>
				Reset
			</button>
		</div>
	);
}

export default ComponentC;
