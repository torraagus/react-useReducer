import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
	loading: true,
	error: "",
	posts: [],
};

const reducer = (state, action) => {
	console.log(state, action);
	switch (action.type) {
		case "FETCHING_SUCCESS":
			return {
				loading: false,
				error: "",
				posts: action.payload,
			};
		case "FETCHING_ERROR":
			return {
				loading: false,
				error: action.error,
				posts: [],
			};
		default:
			return state;
	}
};

function FetchingData() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { loading, error, posts } = state;

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				dispatch({ type: "FETCHING_SUCCESS", payload: res.data });
			})
			.catch((e) => {
				dispatch({ type: "FETCHING_ERROR", error: `${e}` });
			});
	}, []);

	return (
		<div>
			{loading
				? "Loading"
				: posts.map((post) => (
						<p key={post.id}>
							#{post.id}) {post.title}
						</p>
				  ))}
			{error ? state.error : null}
		</div>
	);
}

export default FetchingData;
