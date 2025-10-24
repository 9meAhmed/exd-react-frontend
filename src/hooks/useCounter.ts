import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
