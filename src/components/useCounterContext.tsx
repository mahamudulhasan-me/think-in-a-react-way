import { useContext } from "react";
import { CounterProvider } from "./ContextExample";

const useCounterContext = () => {
  const context = useContext(CounterProvider);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

export default useCounterContext;
