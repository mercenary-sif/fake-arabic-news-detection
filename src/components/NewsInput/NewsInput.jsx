import './newsinput.css'
import { MdVerified } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';

const NewsInput = ({isloading , cancel ,rasult }) => {
    const [news, setNews] = useState('');
    // const data = {
    //   'countData' : [
    //     {'metric' : 'words count',
    //       'value': 12398
    //     },
    //     {'metric' : 'sentences count',
    //       'value': 1298
    //     },
    //     {'metric' : 'polarity',
    //       'value': +0.3
    //     }
    //   ],
    //   'posData':[
    //     { 'metric': 'Nouns', 'value': 240 },
    //    { 'metric': 'Verbs', 'value': 730},
    //      { 'metric': 'Adjectives', 'value': 210},
    //      { 'metric': 'Others', 'value': 130}
    //   ],
    //   'Metrics':[
    //     { 'subjectivity': 0.15, 'lexicalDiversity': 0.9 }
    //   ],
    //   'cyrcleData':[
    //     { 'title': 'Persons', 'value': 5 },      
    //     { 'title': 'Locations', 'value': 3 },    
    //     { 'title': 'Organizations', 'value': 2 }],
    //   'Most_frequent_word':[
    //     { 'word': "economy", 'count': 2132 },
    //     { 'word': "growth", 'count': 1228 },
    //     { 'word': "policy", 'count': 814 },
    //   ] , 
    //   'result': 'Real',// or Fake , Doubtful
    //   'confidence' : 78
    // }
    const handleAnalyze = async () => {
      const arabicRegex = /[\u0600-\u06FF]/;
      if (news === '' || !arabicRegex.test(news)) {
        cancel(true)
        return  
      }
    
      // Show loading
       // false means !L = true → loading
      isloading(false)
      const formData = new FormData();
      formData.append('news', news);
    
      try {
        const res = await axios.post(`http://127.0.0.1:8000//`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const data = await res.json();
        if(data.status ===200){
            // handle response here...
            isloading(true);
            rasult(data , news)
        }
        
      } catch (error) {
        console.error(error);
      } finally {
        
        isloading(true); // true means !L = false → not loading
      }
    };
    
  
    return (
      
      <div className="fake_news_detection__newsInput">
     
        <h2 className="fake_news_detection__newsInput-header">Enter News Article</h2>
        <textarea className="fake_news_detection__textarea" 
        placeholder="Paste the arabic news article here..."
        value={news}
        onChange={(e) => setNews(e.target.value)} />
        <button className="fake_news_detection__button"
        onClick={handleAnalyze}>
            Check Authenticity 
        <MdVerified />
        </button>
      </div>
    );
  };
  
  export default NewsInput;