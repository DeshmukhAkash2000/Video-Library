import { createContext, useContext } from "react";
import { useEffect } from "react";
import {useState} from "react";
import axios from "axios";

const categoryContext=createContext()

const useCategoryContext = ()=>useContext(categoryContext)

const CategoryProvider =({children})=>{
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        (async()=>{
            const response = await axios.get("api/categories")
            setCategory(response.data.categories)
        })()
    },[])

    return(
        <categoryContext.Provider value={{category, setCategory}}>
            {children}
        </categoryContext.Provider>
    )
}

export{useCategoryContext, CategoryProvider}