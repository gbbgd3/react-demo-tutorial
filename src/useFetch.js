import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setTimeout(() => {
             fetch(url)
                 .then(res => {
                     if(!res.ok)
                     {
                         throw Error('Could not fetch the data for that resource');
                     }
                     return res.json();
                 })
                 .then(data => {
                     console.log(data);
                     setData(data);
                     setIsPending(false);
                     setError(null);
                 })
                 .catch(error => {
                     console.log(error.message);
                     setIsPending(false);
                     setError(error.message);
                 })  
             }, 1000);
     }, [url]); 

     return {data, isPending, error};
}

export default useFetch;