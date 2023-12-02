import { CSSProperties, useState } from "react";

type userType = {
  id: number;
  name: string;
};

const Counter = ({ counterStyle }: { counterStyle: CSSProperties }) => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<userType>({} as userType);

  const decrement = () => {
    setCount((count) => count - 1);
    setUser({
      id: 1,
      name: "Mahmud",
    });
  };
  return (
    <div style={counterStyle}>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>{count}</p> <button onClick={decrement}>decrement</button>
      <p>{user.name}</p>
    </div>
  );
};

export default Counter;
