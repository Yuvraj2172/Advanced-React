import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  // const fetchUserData = () => {
  //   fetch("https://api.github.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // };
  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        // console.log(users);
      }
      catch(error){
        console.log(error)
      }
    };
    fetchData();
  },[]);

  return (
    <section>
      <h2>Github Users</h2>
      <ul className="users">
      {users.map((user)=>{
        const {id,login , avatar_url, html_url} = user;
        // console.log(user)
        return(
          <li key={user.id}>
            <img src={avatar_url} alt={login} style={{width:'50px'}} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>profile</a>
            </div>
          </li>
        )
      })}
      </ul>
    </section>
  );
};
export default FetchData;
