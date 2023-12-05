import { Dispatch, SetStateAction, createContext, useState } from "react";

const CounterProvider = createContext<counterContextType | undefined>(
  undefined
);

interface counterContextType {
  cCounter: number;
  setcCounter: Dispatch<SetStateAction<number>>;
}

const ContextExample = ({ children }: { children: React.ReactNode }) => {
  const [cCounter, setcCounter] = useState<number>(10);

  const value: counterContextType = {
    cCounter,
    setcCounter,
  };
  return (
    <CounterProvider.Provider value={value}>
      {children}
    </CounterProvider.Provider>
  );
};

export { ContextExample, CounterProvider };
