import { useState } from "react";

const UseStateObject = () => {
  const [person , setPerson] = useState({
    name : 'Peter',
    age : 24,
    hobby : 'Read Books'
  })
  const [name, setName] = useState("peter");
  const [age, setage] = useState(24);
  const [hobby, setHobby] = useState("read books");
  
  const displayPerson =()=>{
    // setName('John');
    // setage(28);
    // setHobby('Scream at the computer');
    // setPerson({name : 'Yuvraj', age : 20, hobby: 'Studying'});

    // setPerson("shakeandbake");  //application will break

    // setPerson({name : 'Yuvraj'});

    setPerson({...person , name : 'Yuvraj'});
  };

  return <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoys : {person.hobby}</h3>
      <button className="btn" onClick={displayPerson} >Show Yuvraj</button>
      </>;
};

export default UseStateObject;
