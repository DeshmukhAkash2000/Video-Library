import React, { useState } from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'
import { useAuth } from "../../Context/Auth-context"

export const Header = () => {

  const { status,setStatus} = useAuth()

 


  return (
    <div className='header-container'>
       <div className='logo-text'>
          <img className='logo' src="https://icon-library.com/images/playlist-icon-png/playlist-icon-png-25.jpg" alt="" />
          <Link to="/">
            <div>
              <h1 className='header-text'>VisionaryTube</h1>
            </div>
          </Link>
       </div>
       {status ? (<div>
          <h3 className="login-text" onClick={()=>setStatus(false)}>Logout</h3>
       </div>)
       :(
        <Link to="/login">
          <h3 className="login-text" >Login</h3>
        </Link>
       )
       }
      
    </div>
  )
}
