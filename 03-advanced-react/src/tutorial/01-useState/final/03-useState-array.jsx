import {data} from '../../../data';
import React , {useState} from 'react';

const UseStateArray=()=>{
  const [people, setPeople] = useState(data);
  return (
    <h2>useState Array Exapmle</h2>
  )
}

export default UseStateArray;