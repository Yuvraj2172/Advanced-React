import { people } from "../../../data";
import React from 'react'

const List = () => {
  return (
    <div>
      {people.map((p)=>{
        return(
            <h4>{p.name}</h4>
        )
      })}
    </div>
  )
}

export default List
