import React, { useEffect } from "react";
import { useState } from "react";
const useFetch = (url) => {
    const [ isLoading , setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(()=>{
       const fetchUser = async()=>{
        try{
            const resp = await fetch(url);
            if(!resp.ok){
                setIsError(true);
                setIsLoading(false);
                return;
            }
            const user = await resp.json();
            setUser(user);
            // setIsLoading(false);
        }catch(error){
            setIsError(true);
            // return;
        }
        setIsLoading(false);
       };
       fetchUser();
    },[]);
    return {isLoading, isError , user};
};
export default useFetch;