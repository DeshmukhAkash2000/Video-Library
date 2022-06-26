import { useContext, createContext, useReducer } from "react";
import {genreReducerFunc } from "../Reducer/genreReducer"


const genreFiltercontext =createContext()
const useFilter = () => useContext(genreFiltercontext)

const GenreFilterProvider =({children})=>{
    const [VideoState, VideoDispatch] = useReducer(genreReducerFunc,{
        videosFilter:'All',
    })

    return(
        <genreFiltercontext.Provider value={{VideoState, VideoDispatch}}>
            {children}
        </genreFiltercontext.Provider>
    )
}

export { GenreFilterProvider, useFilter}