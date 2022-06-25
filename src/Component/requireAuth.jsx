import { useAuth } from "../Context/Auth-context";
import {Navigate, useLocation } from "react-router-dom";

const RequiresAuth=({ children })=> {
  const { isLoggedIn } = useAuth();
  const location = useLocation()
  return isLoggedIn ? (
      children
  ): 
  <Navigate to="/login" state={{from: location}} replace/>}

export{RequiresAuth}