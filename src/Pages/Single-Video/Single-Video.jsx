import React from 'react';
import "./Single-Video.css";
import ReactPlayer from 'react-player';
import { videos } from '../../backend/db/videos';
import { useParams } from 'react-router-dom';
import {useExploreContext} from "../../Context/ExploreContext";
import { Sidebar } from '../../Component/Sidebar/Sidebar';



const SingleVideo = () => {
    const {VideoId} = useParams()
    const {state} = useExploreContext()

    const playVideo = state.find((play)=>play.id === VideoId)
  return (
   <div className="SingleVideo-main-container"> 
    <Sidebar/>
      <div className='video-text-container'>
      <div className="sv-video" >
        <ReactPlayer 
         width="100%"
         height="100%"
         url={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}/>
      </div>
      <h3 className='sv-title-text'>{playVideo.title}</h3>
      <div className="asd">
        <p className='sv-views'>{playVideo.views}</p>
        <p className='sv-date'>{playVideo.date}</p>
        <div className="like-video-section">
          <i class="fa fa-thumbs-up"></i>
          <p>Like</p>
        </div>     
        <div className='add-to-playlist-section'>
          <i className="fa fa-plus"></i>
          <p>Add to Playlist</p>  
        </div>
        <div className="watch-later-section">
          <i class="fa fa-spinner"></i>
          <p>Watch Later</p>
        </div>
      </div>
      <div className="channel-section">
        <img className='sv-chan-img' src={playVideo.chaImg} alt="" />
        <h3 className='sv-channelName'>{playVideo.chaName}</h3>
      </div>
      <p className='description-text'><span><h4>Desciption:-</h4></span>{playVideo.description}</p>
      </div>

   </div>
    
  )
}

export {SingleVideo}
