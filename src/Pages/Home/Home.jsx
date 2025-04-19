import React, { useState } from 'react'
import { Navbar } from '../../components'
import { AboutUs, Analysis, Footer, Header, HTOM, VerifyNow, WhyTrustOurTool } from '../../Containers'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [result , setResult]= useState(false);
  const [article , setArticle]= useState('');
  const [responseData , setResponsData] = useState([])
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo.replace('#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id.replace('#', ''));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  function show_the_result (data , article){
     setArticle(article)
     setResponsData(data);
     setResult(true);setTimeout(() => scrollToSection('verify-now'), 50);
  }
  return (
    <div id='home'>
        <Navbar/>
        <Header/>
        <WhyTrustOurTool/>
        <div id="verify-now">
        {result ? 
        <Analysis showVerify={()=> {setResult(false) ;
                                    setTimeout(() => scrollToSection('verify-now'), 50);}} 
                  data = {responseData}
                  news = {article}                   />
        :
        <VerifyNow showResult={show_the_result}   />}
        </div>
        <AboutUs/>
        <HTOM/>
        <Footer/>
      </div>
  )
}

export default Home
