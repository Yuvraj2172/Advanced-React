import { data } from "../../../data";
import React, { useState } from "react";
const UseStateArray = () => {
  const [people , setPeople] = useState(data);
  const removeItem=(id)=>{
   let newPeople = people.filter((person)=>person.id!==id);
   setPeople(newPeople);
    // console.log(id)
  }
  const clearAllItems=()=>{
    setPeople([]);
  }

  const repopulate=()=>{
    setPeople(data);
  }

  return (
    <div>
      {people.map((person)=>{
        const {id, name } = person;
        // console.log(person);
        return <div key={id}>
          <h4>{name}</h4>
          <button type='button' className="btn" onClick={()=>{
            removeItem(id);
          }}  > remove</button>
        </div>
      })}
      <button type ='button' style={{marginTop:'2rem'}} className="btn" onClick={clearAllItems} >Clear Items</button>
      <button type ='button' style={{margin:'2rem'}} className="btn" onClick={repopulate} >Repopulate</button>
    </div>
  )
};

export default UseStateArray;
