import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  // conversion 
  const [isLoading, setisLoading] = useState(true);
  const [isError , setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          setIsError(true);
          setisLoading(false);
          return <h2>There was an Error</h2>
        }
        const user = await response.json();
        setUser(user);
        console.log(response);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setisLoading(false);
    };
    fetchUser();
  }, []);
  if(isLoading){
    return <h2>Loading...</h2>;
  }
  if(isError){
    return <h2>Error...</h2>
  }
  // const [id , avatar_url , login] = user;
  return <div key={user.id}>
    <img src={user.avatar_url}  style={{width:`150px`, borderRadius:`25px`}} alt={user.name}/>
    <h2>Name : {user.name}</h2>
    <h4>Works at : {user.company}</h4>
    <p>Bio : {user.bio}</p>
  </div>
};
export default MultipleReturnsFetchData;
