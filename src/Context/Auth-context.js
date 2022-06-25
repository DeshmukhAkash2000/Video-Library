
import { createContext, useContext, useState } from "react";


const AuthContext=createContext();

const AuthProvider=({children})=>{
    const [status, setStatus]=useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    return(
        <AuthContext.Provider value={{status, setStatus, isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth=()=>useContext(AuthContext);

export {useAuth , AuthProvider};








