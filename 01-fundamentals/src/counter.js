import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = setState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <>
    <div className="counter">{count}</div>
    <button onClick={increment}>click to increase</button>
    <button onClick={decrement}>click to decrease</button>
    </>
  )
}

export default counter
