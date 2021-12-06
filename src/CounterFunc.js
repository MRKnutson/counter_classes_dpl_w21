import React, { useState } from "react";

const CounterFunc = (props) => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{props.header}</h1>
      <p>count: {count}</p>
      <button onClick={add}>add</button>
      {/* <button onClick={() => setCount(count + 1)}>add</button> */}
    </div>
  );
};

export default CounterFunc;
