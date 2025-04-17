import { MailCheck , SingUp } from '../../Components'
import './auth.css'
import { useState } from 'react';
const Registerition = () => {
  const [accept, setAccept] = useState(false);
  return (
    <div className='fake_news_detection__auth  section__pedding'>
      {accept ?  <MailCheck/> : <SingUp  send={()=> setAccept(true)} /> }
    </div>
  )
}

export default Registerition
