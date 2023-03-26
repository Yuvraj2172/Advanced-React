import React, { Children } from "react";

export const ErrorExample = () => {
  let count = 0;
//   const [count, 0] =setCount(0);
    const handleClick=()=>{
        count +=1;
        console.log(count);
    }
  return(
    <>
    <div>
        <h2>{count}</h2>
        <button className="btn" type="button" onClick={handleClick}>increase </button>
    </div>
    </>
  );
};
