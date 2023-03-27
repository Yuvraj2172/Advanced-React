import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setage] = useState(24);
  const [hobby, setHobby] = useState("read books");
  
  const displayPerson =()=>{
    setName('John');
    setage(28);
    setHobby('Scream at the computer');
  }

  return <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>Enjoys : {hobby}</h3>
      <button className="btn" onClick={displayPerson} >Show John</button>
      </>;
};

export default UseStateObject;
