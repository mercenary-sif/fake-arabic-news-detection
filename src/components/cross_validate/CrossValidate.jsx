import './cross_validate.css'

const CrossValidate = ({result , reasons , done}) => {
  return (
      <div className='all-area-fill'>
          <div className='fake_news_detection-cv'>
                  <div className="fake_news_detection-cv_continer">
                     <h3>{result}</h3>
                    <p> {reasons} </p>
                   <button  onClick={done}> Return  </button>
                   
                  </div>
            </div>
        </div>
  )
}

export default CrossValidate
