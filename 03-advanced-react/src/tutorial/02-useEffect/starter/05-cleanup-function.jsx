import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [value , setValue] = useState(false);
  return (<div>
    <button className="btn" onClick={()=>{setValue(!value)}}>Toggle</button>
    {value && <SecondComponent />}
  </div>);
};

const SecondComponent=()=>{
  useEffect(()=>{
    console.log("Use Effect");
    
  },[])
  return (
    <h2>this is second Component</h2>
  )
}
export default CleanupFunction;
