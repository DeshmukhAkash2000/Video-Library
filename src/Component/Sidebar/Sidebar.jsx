import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "aqua" : "",
});
export const Sidebar = () => {

  return (
    <div className="sidebar-conatainer">
      <NavLink to="/" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-home"></i>
          <h3>Home</h3>
        </div>
      </NavLink>

      <NavLink to="/ExplorePage" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-object-group"></i>
          <h3>Explore</h3>
        </div>
      </NavLink>

      <NavLink to="/playlist" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-caret-square-o-right"></i>
          <h3>Playlist</h3>
        </div>
      </NavLink>

      <NavLink to="/Watchlater" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-television"></i>
          <h3 className="sidebar-txt-fafa">Watch Later</h3>
        </div>
      </NavLink>

      <NavLink to="/likevideo" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-thumbs-up"></i>
          <h3>Liked Videos</h3>
        </div>
      </NavLink>
      <NavLink to="/historypage" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-clock-o"></i>
          <h3>History</h3>
        </div>
      </NavLink>

      <NavLink to="/auth" style={getActiveStyle}>
        <div className="sidebar-txt-fafa">
          <i class="fa fa-clock-o"></i>
          <h3>Auth</h3>
        </div>
      </NavLink>
    </div>
  );
};
