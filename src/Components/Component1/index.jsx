import { useState } from "react";

const Component1 = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={add}>ADD + 1</button>
      <div>COUNT : {count}</div>
      <button onClick={subtract}>SUBTRACT - 1</button>
    </>
  );
};

export default Component1;
