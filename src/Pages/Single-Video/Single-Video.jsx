import React, { useState } from "react";
import "./Single-Video.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useExploreContext } from "../../Context/ExploreContext";
import { Sidebar } from "../../Component/Sidebar/Sidebar";
import { useWatchlater } from "../../Context/Watchlater-Context";
import { CreatePlaylist } from "../Playlist/CreatePlaylist/CreatePlaylist";
import { usePlaylist } from "../../Context/PlaylistContext";
// import {  toast } from 'react-toastify';
// import  ToastContainer from 'react-toastify';

// import { Link } from "react-router-dom";

const SingleVideo = () => {
  const { VideoId } = useParams();
  const { state } = useExploreContext();
  const {status,setStatus, statePlaylist:{playLists}, dispatchPlaylist} = usePlaylist()
  const { stateWatchlater :{likeVideo}, dispatchWatchlater, stateWatchlater:{ watchlater } } = useWatchlater();

  const playVideo = state.find((play) => play.id === VideoId);
  
  return (
    <div className="SingleVideo-main-container">

      <Sidebar />

      <div className="sv-playlist-component">
        { status && <CreatePlaylist video={playVideo}/>
       }
      </div>

      <div className="video-text-container">
        <div className="sv-video">
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}
          />
        </div>

        <h3 className="sv-title-text">{playVideo.title}</h3>
        <div className="asd">
          <p className="sv-views">{playVideo.views}</p>
          <p className="sv-date">{playVideo.date}</p>

          {likeVideo.some((data) => data.id === playVideo.id) ? (
            <div div className="watch-later-section">
              <i class="fa fa-thumbs-down"></i>
              <p className="sv-title-texts" onClick={()=>dispatchWatchlater({type:"REMOVE_FROM_LIKE", payload:playVideo})}>Dislike</p>
            </div>
          ) : (
          <div className="like-video-section" onClick={() =>{
            // toast.success("Added to Liked Video ")
                dispatchWatchlater({
                  type: "ADD_TO_LIKE",
                  payload: playVideo,
                })}
              }>
            <i class="fa fa-thumbs-up"></i>
            <p className="sv-title-text">Like</p>
          </div>)}

          {/* {playlists.some((data) => data.id === playVideo.id) ? (
            <div div className="watch-later-section">
              <i class="fa fa-check-square-o"></i>
              <p className="sv-title-texts">Added to playlist</p>
            </div>
          ) :( */}
          <div className="add-to-playlist-section" onClick={()=>setStatus(true)}>
            <i className="fa fa-plus"></i>
            <p className="sv-title-texts" onClick={()=> setStatus(true)}>Add to Playlist</p>
          </div>



          {watchlater.some((data) => data.id === playVideo.id) ? (
            <div div className="watch-later-section">
              <i class="fa fa-remove"></i>
              <p className="sv-title-texts" onClick={()=>dispatchWatchlater({type:"REMOVE_FROM_WATCHLATER", payload:playVideo})}>Remove From WatchLater</p>
            </div>
          ) : (
            <div
              onClick={() =>
                dispatchWatchlater({
                  type: "ADD_TO_WATCHLATER",
                  payload: playVideo,
                })
              }
              className="watch-later-section"
            >
              <i class="fa fa-spinner"></i>
              <p className="sv-title-texts"> add Watch Later</p>
            </div>
          )}
        </div>


      <div className="channel-section">
        <img className="sv-chan-img" src={playVideo.chaImg} alt="" />
        <h3 className="sv-channelName">{playVideo.chaName}</h3>
      </div>

        <p className="description-text">
          <span>
            <h4>Desciption:-</h4>
          </span>
          {playVideo.description}
        </p>
      </div>
    </div>
      
  );
};

export { SingleVideo };
