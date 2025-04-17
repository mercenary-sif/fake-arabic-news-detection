import React from "react"
import ScrollToTop from "../ScrollToTop/ScrollResteration"
import { home, singIn } from "../Pages"
import { Route , Routes , BrowserRouter as  Router} from "react-router-dom"
 
const Pages = () => {
  return (
    <> 
    <Router>
     <ScrollToTop/>
      <Routes>
        <Route path="/" Component={home}/>
        <Route path="/singIn" Component={singIn}/>
      </Routes>
      </Router>
      
      
    </>
  )
}

export default Pages
