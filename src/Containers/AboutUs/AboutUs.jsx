import { Feature } from '../../components'
import './aboutus.css'
import features from './features'


const AboutUs = () => {

  return (
    <div className='fake_news_detection__aboutUs section__margin' id="about-us">
      <div className="fake_news_detection__aboutUs-tool_definition">
      <Feature 
         title={"Empowering Truth with Verify"}
         text={'In a world where misinformation spreads rapidly, our AI-powered platform is dedicated to detecting fake news in Arabic media. Using advanced language processing, we analyze news articles to provide reliable assessments, helping users distinguish between truth and deception.'} />
      </div>
      <div className="fake_news_detection__aboutUs-heading">
      <h1 className='Gradient_  _text'>
      The possibilities are beyond your imagination
      </h1>
    
      </div>
      <div className="fake_news_detection__aboutUs-container">
      { 
             features.map((item , i)=> 
                <Feature key={i} title={item.title} text={item.text}/>) 
        }
      </div>
    </div>
  )
}

export default AboutUs
