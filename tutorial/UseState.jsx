import React, { Children } from "react";
import { useState } from "react";
const UseState = () => {
  // console.log(useState(1));
  //    const value =useState('hello')[0];
  //    const func = useState('hello')[1];
  //     console.log(value);
  //     console.log(func);
  const [count, setCount] = useState(0);
  // console.log(count);
  // setCount(22);
  // console.log(count);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <h4>You clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default UseState;
