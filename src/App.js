import React, { useReducer } from "react";
import "./App.css";
// import ComponentA from "./components/useContext&useReducer/ComponentA";
// import ComponentB from "./components/useContext&useReducer/ComponentB";
// import ComponentC from "./components/useContext&useReducer/ComponentC";
// import GetPost from "./components/FetchingData/GetPost";
// import logo from './logo.svg';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';
import GetPosts from "./components/FetchingData/GetPosts";

export const CountContext = React.createContext();

const initialState = { count: 0, modifier: "" };
const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { count: state.count + 1, modifier: action.modifier };
		case "decrement":
			return { count: state.count - 1, modifier: action.modifier };
		case "reset":
			return { ...initialState, modifier: action.modifier };
		default:
			return state;
	}
};

function App() {
	const [counter, dispatch] = useReducer(reducer, initialState);

	return (
		<CountContext.Provider
			value={{ countState: counter.count, countDispatch: dispatch }}
		>
      <div className="App">
        <GetPosts />
				{/* <GetPost /> */}
				
        {/* 
        <div>
					Count: {counter.count} {counter.modifier !== '' && `- Last modifier: ${counter.modifier}`}
        </div>
				<ComponentA />
				<ComponentB />
        <ComponentC />
        
        <CounterThree />
				<CounterTwo />
				<CounterOne /> */}
			</div>
		</CountContext.Provider>
	);
}

export default App;
