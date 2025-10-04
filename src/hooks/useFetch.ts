import { useState, useEffect } from 'react';

function useFetch<T>(url: string){
    
    const [ data, setData ] = useState<T | null>(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        // using special JS controller, used for handling errors that might appear while component is mounting
        const abortController = new AbortController();
        
        const fetchData = async () => {
            // resetting states on each new fetch
            setIsLoading(true);
            setError(null);
            
            // trying to fetch data
            try{
                const response = await fetch(url, { signal : abortController.signal });
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            }catch(error: any){
                if(error.name === 'AbortError'){
                    console.log('Fetch aborted');
                }else{
                    setError('Failed to fetch data');
                }
            }finally{
                setIsLoading(false);
            }
        };

    fetchData();

    return () => {
        abortController.abort();
    }
    }, [url]);

    return { data, isLoading, error };

}

export default useFetch;