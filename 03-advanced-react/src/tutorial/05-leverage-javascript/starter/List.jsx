import { Person } from './Person';
import { people } from "../../../data";
import React from 'react'

const List = () => {
  return (
    <div>
      {people.map((p)=>{
        return(
           <Person key={p.id} {...p}     />
        )
      })}
      
    </div>
  )
}

export default List
