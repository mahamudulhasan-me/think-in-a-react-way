import useCounterContext from "./useCounterContext";

const CounterByContext = () => {
  const { cCounter, setcCounter } = useCounterContext();
  return (
    <div>
      <button onClick={() => setcCounter(cCounter + 1)}>Increment</button>
      {cCounter}
      <button onClick={() => setcCounter(cCounter - 1)}>Decrement</button>
    </div>
  );
};

export default CounterByContext;
