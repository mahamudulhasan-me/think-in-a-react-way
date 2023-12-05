import { useReducer } from "react";

const initialState = { count: 0 };

// const INCREMENT = "INCREMENT";
// const DECREMENT = "DECREMENT";

type actionType =
  | { type: "INCREMENT"; payload: number }
  | { type: "DECREMENT"; payload: number };

function reducer(state: typeof initialState, action: actionType) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    case "DECREMENT":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement
      </button>
    </div>
  );
};

export default CounterReducer;
