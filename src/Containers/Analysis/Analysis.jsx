import { useEffect, useState } from 'react'
import {HiOutlineDocumentText , HiOutlineMenuAlt2} from "react-icons/hi"
import {BsEmojiSmile } from "react-icons/bs"
import {  A_Card, CrossValidate, N_Bubbles, P_Chart, Result, Subjectivity } from '../../components'
import './analysis.css'
import axios from 'axios'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'
const iconMap = {
  "Word Count": <HiOutlineDocumentText />,
  "Sentence Count": <HiOutlineMenuAlt2 />,
  "Polarity": <BsEmojiSmile />,
};
const colorMap = {
  'Nouns': '#42a5f5',
  'Verbs': '#66bb6a',
  'Adjectives': '#ab47bc',
  'Organizations': '#ffa726',
  'Others': '#ef5350',
};

const Analysis = ({showVerify , data ,  news}) => {
  const [validation , setValidation] = useState(false)
  const [ValidationResult , setValidationResult] = useState('')
  const [ValidationReason , setValidationReason]= useState('')
  const [isloading, setIsloading] = useState(false);
  const [result , setResult] = useState('')
  const [score , setScore] = useState(0)
  const [countData , setCountData] = useState([])
  const [cyrcleData, setCyrcleData] = useState([]);
  const [metricsData, setMetricsData] = useState([]);
  const [PosData , setPosData] = useState([]);
  const [TopWordsWithPercent, setTopWordsWithPercent] = useState([]);
   useEffect(() => {
    const fetchResult = () => {
  
          const transformed__countData = data.countData.map(({ metric, value }) => {
            
            let title = '';
            if (metric === 'words count') title = 'Word Count';
            else if (metric === 'sentences count') title = 'Sentence Count';
            else if (metric === 'polarity') title = 'Polarity';
      
            return {
              title,
              value,
              icon: iconMap[title] || null
            };
          });
          const transformed__posData = data.posData.map(({ metric, value }) => {
            return {
              metric,
              value,
              color: colorMap[metric] || '#999',
            };
          });
          if (Array.isArray(data.Metrics) && data.Metrics.length > 0) {
            setMetricsData(data.Metrics);
          }
           // This for transfer the person count , locations and organization
           const transformed__cyrcleData = data.cyrcleData.map(({ title, value }) => {
            let color = '#999'; // Default color
            if (title === 'Persons') color = '#e74c3c'; // Red
            if (title === 'Locations') color = '#3498db'; // Blue
            if (title === 'Organizations') color = '#2ecc71'; // Green
          
            return {
              title,
              value,
              color,
            };
          });
          if (data?.Most_frequent_word && data?.countData) {
            const wordCountEntry = data.countData.find(entry => entry.metric === 'words count');
            const totalWordCount = wordCountEntry?.value || 1; // avoid divide-by-zero
      
            const transformed = data.Most_frequent_word.map(word => ({
              text: word.word,
              count: word.count,
              percent: Math.round((word.count / totalWordCount) * 100),
            }));
      
            setTopWordsWithPercent(transformed);
          }
          setPosData(transformed__posData)
          setCountData(transformed__countData);
          setCyrcleData(transformed__cyrcleData)
          setResult(data.result)
          // set the score 
          setScore(data['confidence'])
        };
        
        fetchResult();
      }, []);

      const CroseValidate = async () => {
        setIsloading(true)
        const formData = new FormData();
        
        formData.append('news', news);
      
        try {
          const res = await axios.post(`http://127.0.0.1:8000//`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          const croosData = await res.json();
          if(croosData.status ===200){
              // handle response here...
              setIsloading(false);
             
              setValidationResult(croosData.result)
              setValidationReason(croosData.reason)
              setValidation(true);
              
          }
          
        } catch (error) {
          console.error(error);
        } finally {
          
          setIsloading(false); 
        }
      };
        
  return (
    <div className='fake_news_detection__analysis section__pedding' id='analysis'>
       {isloading && <LoadingScreen loding_messege={' Validating the news ... please wait this gonna take a few seconds.'}/>}
       {validation && 
       <CrossValidate result={ValidationResult}
        reasons={ValidationReason}
        done={()=>setValidation(false)}
        />
        }
       <div className="fake_news_detection__analysis-title">
        <h1> In-Depth News Authenticity Analysis </h1>
        <h3>Explore comprehensive AI-powered insights to understand the reliability, sentiment, and linguistic patterns of your news article. </h3>
      </div>
       <div className="fake_news_detection__analysis-container">
      
        <div className="fake_news_detection__analysis-container__title">
            <h2>Analysis</h2>
        </div>
           <Result score={score} result={result}/>
        <div className="fake_news_detection__analysis-container-grid">
        { 
             // change data with countData 
             countData.map((item , i)=> 
                // eslint-disable-next-line react/jsx-pascal-case
                <A_Card key={i} title={item.title} value={item.value} icon={item.icon}  />) 
        }
        </div>
       <div className="fake_news_detection__analysis-container-row">
       <div className="fake_news_detection__analysis-container-row__N_Bubbles">
            <N_Bubbles data={cyrcleData} />
        </div>
        <div className="top-words-container">
          <div className="top-words-container__header">
            <h2>The most frequent words </h2>
          </div>
                  {TopWordsWithPercent.map((word, index) => (
                <div className="word-card" key={index}>
                  <h3>{word.text}</h3>
                  <p>{word.count} uses — {word.percent}%</p>
                  <div className="word-bar-wrapper">
                    <div className="word-bar" style={{ width: `${word.percent}%` }}></div>
                  </div>
                </div>
              ))}
        </div>
       </div>
       <div className="fake_news_detection__analysis-container-row__second">
       <div className="fake_news_detection__analysis-container-row__SD">
          <Subjectivity data={metricsData} />
        </div>
        <div className="fake_news_detection__analysis-container-row__chart">
            <P_Chart data= {PosData} />
        </div>
       </div>
       <div className="fake_news_detection__analysis-container__btn">
       
       <button onClick={CroseValidate}>
        Validate the result
       </button>
       <button onClick={showVerify}>
        back to verify 
       </button>
       </div>
      </div>
    </div>
  )
}

export default Analysis
