import { Feature } from '../../components'
import Training_steps from './data'
import './htom.css'
const HowWeTrainOurModel = () => {
  return (
    <div className='fake_news_detection__htom section__pedding' id='our-model'>
      <div className="fake_news_detection__htom-header">
        <h3>Building Trust with AI: How We Trained Our Model</h3>
        <h1>From raw data to reliable predictions—explore the rigorous process behind our AI-powered fake news detection system.</h1>
      </div>
      <div className="fake_news_detection__htom-container">
        {
          Training_steps.map((item , i)=> 
            <Feature key={i} title={item.title} text={item.text} />)
        }
      </div>
    </div>
  )
}

export default HowWeTrainOurModel
