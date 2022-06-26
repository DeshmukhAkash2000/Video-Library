import React from 'react';
import "./HomePage.css"
import {Link} from 'react-router-dom'
import { useFilter } from '../../Context/genreContext';
import { useCategoryContext } from '../../Context/HomeCategoryContext';

export const HomePage = () => {

    const {category}= useCategoryContext()

    const {VideoState : {videosFilter},VideoDispatch}= useFilter()

    let categoryFilterArray =category.filter((item)=>item.category===videosFilter);

    if (videosFilter==="All"){
        categoryFilterArray=category
    }
  return (
    <div className='homepage-container'>
        <Link to="/ExplorePage">
            <div className='home-image-upper-container' >
                    {categoryFilterArray.map((item)=>
                    <div className='home-img-txt-container' onClick={() =>
                        VideoDispatch({ type: "FILTER_BY_GENRE", payload: item.categoryName })}>
                        <img className='home-image' src={item.categoryIMG} alt="" />
                        <h2 className='home-category-text'>{item.categoryName}</h2>
                    </div>)}
            </div>
            </Link>

       <Link to="/ExplorePage">
          <div>
              <button className='home-explore-btn'>Explore</button>
            </div>
       </Link>
    </div>
  )
}
