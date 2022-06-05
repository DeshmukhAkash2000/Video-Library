import React from 'react';
import "./HomePage.css"
import {Link} from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='homepage-container'>
        <div className='home-image-upper-container'>
            <div className='home-img-txt-container'>
                <img className='home-image'  src="https://cdn.corporatefinanceinstitute.com/assets/finance-definition.jpg" alt="" />
                <h2 className='home-category-text'>Personal Finance</h2>
            </div>

            <div className='home-img-txt-container'>
                <img className='home-image'  src="https://t3.ftcdn.net/jpg/00/66/79/48/360_F_66794862_OeoQv7Jd2iZBS3ajJW2LMlypskm7dStr.jpg" alt="" />
                <h2 className='home-category-text'>Geopolitics</h2>
            </div>

            <div className='home-img-txt-container'>
                <img className='home-image2'  src="https://rscil.com/wp-content/uploads/2020/05/Psychology-word-cloud.jpg" alt="" />
                <h2 className='home-category-text'>Psychology</h2>
            </div>
        </div>

        <div className='home-image-lower-container'>
            <div className='home-img-txt-container'>
            <img className='home-image'  src="https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/pexels-karolina-grabowska-4386367.jpg" alt="" />
            <h2 className='home-category-text'>Taxes</h2>
            </div>

            <div className='home-img-txt-container'>
            <img className='home-image2'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhEbuB9CDC2QYgTwXUsZ_4T7aqyyqlJf2xwGQ5G7OCapuHg0-E8l5M3iYEGrqabUywB0&usqp=CAU" alt="" />
            <h2 className='home-category-text'>Investment</h2>
            </div>
        </div>

       <Link to="/ExplorePage">
          <div>
              <button className='home-explore-btn'>Explore</button>
            </div>
       </Link>
    </div>
  )
}
