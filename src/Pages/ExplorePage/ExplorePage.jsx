import React from 'react';
import "./ExplorePage.css"
import { Link } from 'react-router-dom';
import { videos } from '../../backend/db/videos';
import { useExploreContext } from '../../Context/ExploreContext';
import { Sidebar } from '../../Component/Sidebar/Sidebar';

export const ExplorePage = () => {

    const { state } = useExploreContext();
  return (
    <div className='explore-upper'>
        <div> <Sidebar /></div>
       <div className='explore-main-container'>       
        {videos.map((item)=>
       <Link to={`/SingleVideo/${item.id}`}>  <div className='explore-card'>
            <img className='explore-img' src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`} alt="video"/>
            <h3 className='video-title'>{item.title}</h3>
            
            <div className='card-lower-section'>
              <div className='channel-logo-container'>
              <img  className='chName' src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2020/06/cropped-Copy-of-aw-1.png?fit=512%2C512&ssl=1" alt="" />
               <p className='video-date'>{item.chaName}</p>
              </div>
               <p className='video-views'>{item.views}</p>
               <p className='video-date'>{item.date}</p>
            </div>
        </div>
        </Link>
        )}
      </div>
    </div>
  )
}
