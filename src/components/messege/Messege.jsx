import './mesg.css'
import { MdReportGmailerrorred } from "react-icons/md";
const Messege = ({content , error}) => {
  return (
    <div className='all-area-fill'>
      <div className='fake_news_detection-messege'>
              <div className="fake_news_detection-messege__icon">
                    <MdReportGmailerrorred/>
              </div>
              <div className="fake_news_detection-messege_continer">
                <p> {content} </p>
                <button  onClick={() => error(false)}> Return </button>
              </div>
        </div>
    </div>
  )
}

export default Messege
