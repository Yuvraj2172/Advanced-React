import { React,useState } from "react";
import {data} from '../../../data'

const UserChallenge = () => {
  const [name, setname] = useState('');
  const [users, setUsers] = useState(data);
  const handleNameChange=(e)=>{
    setname(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name)return;
    const fakeId=Date.now();
    // console.log(fakeId)
    // const newUser = {id:fakeId, name: name}; Shorthand syntax
    const newUser = {id:fakeId, name};
    const updatedUsers=[...users,newUser];
    setUsers(updatedUsers);
    console.log(updatedUsers);
    setname('');
    // console.log('Form Submitted');
  };

  const removeUser=(id)=>{
    const newUser=users.filter((user)=> user.id!==id);
    setUsers(newUser)
  }
  return (
    <div>
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
    </div>
    <h1>users</h1>
      
      {users.map((user)=>{
        return(
          <div key={user.id}>
            <h4  >{user.name}</h4>
            <button className="btn" onClick={()=>removeUser(user.id)} >remove user</button>
          </div>
        )
      })}
    </div>
    
  );
};
export default UserChallenge;
