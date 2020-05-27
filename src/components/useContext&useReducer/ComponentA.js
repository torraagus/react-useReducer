import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
    const countContext = useContext(CountContext);
	return (
		<div>
			<span>Component A </span>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "increment", modifier: "A" })
				}
			>
				Increment
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "decrement", modifier: "A" })
				}
			>
				Decrement
			</button>
			<button
				onClick={() =>
					countContext.countDispatch({ type: "reset", modifier: "A" })
				}
			>
				Reset
			</button>
		</div>
	);
}

export default ComponentA;
