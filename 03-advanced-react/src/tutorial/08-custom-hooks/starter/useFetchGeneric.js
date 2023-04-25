import  { useEffect } from "react";
import { useState } from "react";

const useFetchGeneric = (url) => {
    const [data , setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await fetch(url);
                if(!response.ok){
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }
                const resp = await response.json();
                setData(resp);
            }
            catch(error){
                setIsError(error);
            }
            setIsLoading(false);
        };
        fetchData();
    });
    return {isLoading, isError, data};
};
export default useFetchGeneric;