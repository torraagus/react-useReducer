import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	posts: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCHING_SUCCESS":
			return {
				loading: false,
				error: "",
				post: action.payload,
			};
		case "FETCHING_ERROR":
			return {
				loading: false,
				error: action.error,
				post: {},
			};
		default:
			return state;
	}
};

function FetchingData() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts/1")
			.then((res) => {
				dispatch({ type: "FETCHING_SUCCESS", payload: res.data });
			})
			.catch((e) => {
				dispatch({ type: "FETCHING_ERROR", error: `${e}` });
			});
	}, []);

	return (
		<div>
			{state.loading ? "Loading" : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default FetchingData;
