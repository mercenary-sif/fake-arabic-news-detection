import './card.css'

const Card = ({title , content , icon}) => {
  return (
    <div className='fake_news_detection__card'>
          <div className="fake_news_detection__card-icons">
            {icon}
          </div>
          <div className="fake_news_detection__card-content">
           <h3> {title} </h3>
           <p> {content} </p>
        </div>
    </div>
  )
}

export default Card
