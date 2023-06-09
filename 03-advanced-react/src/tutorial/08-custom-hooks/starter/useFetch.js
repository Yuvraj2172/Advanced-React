import  { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [user , setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(()=>{
        const fetchUser = async ()=>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const user = await response.json();
                setUser(user);
            }
            catch(error){
                setIsError(error);
            }
            setIsLoading(false);
        };
        fetchUser();
    });
    return {isLoading, isError, user};
};
export default useFetch;