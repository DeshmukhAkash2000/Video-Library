import React from 'react';
import "./Sidebar.css";
import {Link} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className='sidebar-conatainer'>
       <Link to="/">
		  <div className='sidebar-txt-fafa'>
		    <i class="fa fa-home"></i>
          <h3>Home</h3>
        </div>

		 </Link>
		  <div className='sidebar-txt-fafa'>
		    <i class="fa fa-object-group"></i>
          <h3>Explore</h3>
		  </div>

		  <div className='sidebar-txt-fafa'>
		    <i class="fa fa-caret-square-o-right"></i>
          <h3>Playlist</h3>
		  </div>

		  <div className='sidebar-txt-fafa'>
		    <i class="fa fa-television"></i>
          <h3 className='sidebar-txt-fafa'>Watch Later</h3>
		  </div>

		  <div className='sidebar-txt-fafa'>
		    <i class="fa fa-thumbs-up"></i>
          <h3>Liked Videos</h3>
		  </div>

        <div className='sidebar-txt-fafa'>
		    <i class="fa fa-clock-o"></i>
		    <h3>History</h3>
		  </div>
    </div>
  )
}
