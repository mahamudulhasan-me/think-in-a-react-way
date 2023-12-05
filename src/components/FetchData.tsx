import useCounterContext from "./useCounterContext";

type statusPropsType = {
  status: "loading" | "success" | "error";
};

const FetchData = ({ status }: statusPropsType) => {
  const { cCounter, setcCounter } = useCounterContext();
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && <p>Success</p>}
      {status === "error" && <p>Error</p>}

      <hr />
      <div>
        <button onClick={() => setcCounter(cCounter + 1)}>Increment</button>
        {cCounter}
        <button onClick={() => setcCounter(cCounter - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default FetchData;
