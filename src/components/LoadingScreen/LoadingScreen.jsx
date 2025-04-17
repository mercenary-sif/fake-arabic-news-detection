import React from 'react';

import './loadingScreen.css'
const LoadingScreen = ({loding_messege}) => {

  return (
    <>  
    <div className='all-area-fill'>
       <div className="loading-box">
    <div className="spinner">  
    </div>
        <p className="fake_news_detection__loading-text">
     {loding_messege}
    </p>
    </div>
    </div>
    </>
  )
}

export default LoadingScreen
