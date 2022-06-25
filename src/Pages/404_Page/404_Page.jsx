import React from 'react';
import "./404_Page.css"

const ErrorPage = () => {
  return (
    <div className='error-main-container'>
        <div className='error-container'>
        <h2 className='error-text'>Error 404. The user typed wrong URL. The page is never existed.</h2>
        </div>
    </div>

  )
}

export { ErrorPage }
