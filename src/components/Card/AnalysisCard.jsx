import './analysisCard.css'
const AnalysisCard = ({icon , title , value  }) => {
  return (
    <div className='fake_news_detection__analysis-card'>
      <div className="fake_news_detection__analysis-card__top">
         <h3> {title} </h3>
         <div className="fake_news_detection__analysis-card__top-icon">
            {icon}
         </div>
      </div>
      <h2> {value} </h2>
    </div>
  )
}

export default AnalysisCard
