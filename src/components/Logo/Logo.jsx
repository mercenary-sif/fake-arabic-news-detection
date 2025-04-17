import './logo.css'
import Icon from '../../images/logo--1.png'
const Logo = () => {
  return (
    <div>
      <div className="fake_news_detection-logo">
              <img src={Icon} alt='logo' />
              <div className="fake_news_detection-logo-name">
              <h3>VERIFY</h3>
              <p>arabic news</p> 
              </div>
            </div>
    </div>
  )
}

export default Logo
