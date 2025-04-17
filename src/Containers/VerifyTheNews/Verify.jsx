import {  Error_Messege, NewsInput } from '../../components'
import './verify.css'
import { useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
const Verify = ({showResult}) => {
   
   const [isLoading, setIsLoading] = useState(false);
   const [error , setError] = useState(false);
   function handlError (e){
      setError(e)
   }
  return (
    <div className='fake_news_detection__verify section__pedding' id='verify-now'>
        {isLoading && <LoadingScreen loding_messege={' Analyzing the news ... please wait while our AI verifies the news authenticity.'} />}
        {error && <Error_Messege content={'Please enter the arabic news first '} error={handlError} />}
      <div className="fake_news_detection__verify-cover"></div>
      <div className="fake_news_detection__verify-heading">
         <h3>Is This News Real or Fake? Let’s Find Out!</h3>
         <h1><span>Verify</span> News Authenticity with AI-Powered Analysis</h1>
         <p>Enter a news article, let AI analyze it, and receive a detailed breakdown—credibility, sentiment, key entities, and linguistic patterns.</p>
      </div>
      <div className="fake_news_detection__verify-container">
        <NewsInput isloading={(L)=>setIsLoading(!L)} cancel={handlError} rasult={showResult} />
      </div>
      
    </div>
  )
}

export default Verify
