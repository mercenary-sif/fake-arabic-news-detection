import { Card, SectionAnimation } from '../../components'
import data from './import'
import './wtot.css'

const WTOT = () => {
  
  return (
    <SectionAnimation>
    <div className='fake_news_detection__WhyTrustOurTool section__pedding'>
      <div className="fake_news_detection__WhyTrustOurTool-title">
        <h3> <span>Verify</span> is your best choose</h3>
        <h1>Why Trust Our AI-Powered Fake News Detection?</h1>
      </div>
      <div className="fake_news_detection__WhyTrustOurTool-content">
      { 
             data.map((item , i)=> 
                <Card key={i} title={item.title} content={item.content} icon={item.icon}/>) 
        }
      </div>
    </div>
    </SectionAnimation>
  )
}

export default WTOT
