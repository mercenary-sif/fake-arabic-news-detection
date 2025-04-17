import './header.css'
import cover from '../../images/rich-tervet-i8r3Kt2-mr8-unsplash.jpg'
const Header = () => {
  return (
    <div className='fake_news_detection__header section__pedding'>
          <div class="fake_news_detection__header-cover">
                <img src={cover} alt="cover"/>
            </div>
           <div className="fake_news_detection__header-container">
                <div className="fake_news_detection__header-container__title">
                <h3>Don't Let Fake News Fool You!</h3>
                <h1>Verify Arabic News and Uncover the Truth!</h1>
                <p>
                Combat fake news smartly! Our platform uses advanced AI technologies to analyze Arabic news and detect misinformation. Don't fall for false information verify the news in a few seconds. </p>
                </div>
            
           </div>
    </div>
  )
}

export default Header
