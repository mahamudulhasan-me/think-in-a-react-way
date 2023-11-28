import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

// Define the type for the context value
interface UserContextValue {
  user: string;
  address: string;
  setUser: Dispatch<SetStateAction<string>>;
  setAddress: Dispatch<SetStateAction<string>>;
}

// Create the context with initial undefined value
const UserContext = createContext<UserContextValue | undefined>(undefined);

// Define the props type for the provider
interface UserContextProviderProps {
  children: ReactNode;
}

// Rename the component to start with an uppercase letter
const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState("Mahmud");
  const [address, setAddress] = useState("Dhaka");

  const value = useMemo(() => {
    return {
      user,
      address,
      setUser,
      setAddress,
    };
  }, [user, address]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
