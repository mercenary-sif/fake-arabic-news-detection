
import { FaUser  } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import './authComponents.css'
import { VerifyLogo } from "..";

const SingIn = () => {
  
  return (
    <div className='fake_news_detection__sing'>
        <div className="fake_news_detection__sing-header">
          <div className="fake_news_detection__sing-header__content">
          <h1>Welcome to <span>VERIFI</span> – AI-Powered Fake News Detection!</h1>
          <p>Sign in to unlock powerful AI-driven news verification. With your account, you can analyze news articles, get in-depth credibility reports, track your past verifications, and contribute to building a misinformation-free digital space. Stay informed, stay ahead, and make fact-based decisions with confidence.</p>
        
          </div>
         </div>
        <div className="fake_news_detection__sing-container">
        <VerifyLogo/>
       <div className="fake_news_detection__sing-container__inputsGroup">
       <div className="fake_news_detection__sing-container__input">
                    <FaUser/>
                   <input type="email" id="email" name="email" placeholder='Email@...' />
                   </div>
       <div className="fake_news_detection__sing-container__input">
            <IoIosLock/>
            <input type="password" placeholder="Enter your password"  />
        </div>
       </div>
        <button type="button" >Sign In 
          <RiLoginCircleLine/>
        </button>
        <div className="fake_news_detection__sing-container__new_here">
          <h3>New here? Create an account in seconds and start verifying news with AI-powered accuracy. <span>Sign Up</span> </h3>
        </div>
        </div>
    </div>
  )
}

export default SingIn
