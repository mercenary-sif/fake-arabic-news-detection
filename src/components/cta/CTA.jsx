import React from 'react'
import './cta.css'
import { useNavigate } from 'react-router-dom';
const CTA = () => {
  const navigate  = useNavigate();
  function NavgatTo(page){
    navigate(`/${page}`);
} 
  return (
    <div className='fake_news_detection__cta'>
      <div className="fake_news_detection__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="fake_news_detection__cta-btn">
        <button type='button'  onClick={() => NavgatTo('singIn')}>Get Started</button>
      </div>
      
    </div>
  )
}

export default CTA
