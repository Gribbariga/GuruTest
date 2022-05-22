import { useCallback, useState } from "react";


const useHttp = () => {

    const [procces, setProcces] = useState("load");

    const request = useCallback(async (url, method = "GET", body = null, headers = {'Content-Type': 'application/json'}) => {

        
    
        try{    
            setProcces("load");
            const response = await fetch(url,{method,body,headers});
    
            if(!response.ok) {
                throw new Error(`request ${url} error: status ${response.status}`);
            }
    
            const data = await response.json();
    
            return data;
        }catch(e) {
            setProcces('error');
            throw e;
        }
    
    
    },[])

    return {setProcces, request, procces};
}

export default useHttp;