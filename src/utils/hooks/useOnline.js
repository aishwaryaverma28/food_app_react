import { useEffect, useState } from "react";
// this hook we made from scratch.

const useOnline = ()=>{

    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{

        const handleOnline = ()=>{
            setIsOnline(true);
        }
       const handleOffline = ()=>{
        setIsOnline(false);
       }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{ // all eventlisterns should be removed at unmounting phase(it's a good practice)
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]) // as we want to check once while first time showing page

    return isOnline;
}
export default useOnline;