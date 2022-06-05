import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const exploreContext = createContext();

const useExploreContext =()=>useContext(exploreContext)

const ExploreProvider =({children})=>{

    const [state, setState] = useState([]);

    useEffect (()=>{
        (async()=>{
            const response = await axios.get("/api/videos");
            setState(response.data.videos)
        })()
    },[])

    return (
        <exploreContext.Provider value={{state, setState}}>
            {children}
        </exploreContext.Provider>
    )
}

export {useExploreContext, ExploreProvider}