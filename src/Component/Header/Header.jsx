import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom'

export const Header = () => {
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
        <h3 className='login-text'>LogIn</h3>
    </div>
  )
}
