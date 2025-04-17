import './navbar.css'
import React, { useState } from 'react'
import  logo from '../../images/logo--1.png'
import { RiMenu3Line , RiCloseLine  } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom';


const Menu = ({NavgatTo}) => {
    return(
     <>
       <p onClick={() => NavgatTo('')}>Home</p>
       <p onClick={() => NavgatTo(`#about-us`)}>About US</p>
       <p onClick={() => NavgatTo(`#our-model`)}>Our Model</p>
       <p onClick={() => NavgatTo(`#verify-now`)}>Verify</p>
       <p onClick={() => NavgatTo(`#contact-us`)}>Contact US</p>
    </>)
   };   
  


const NavBar = () => {
 const navigate  = useNavigate();
 const location = useLocation();
 function NavgatTo(page) {
  if (page.startsWith("#")) {
    const sectionId = page.replace('#', '');
    if (location.pathname !== "/") {
      navigate("/", { 
        state: { scrollTo: `#${sectionId}` },
        replace: true  // Add this to clear navigation history
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  } else {
    navigate(`/${page}`);
  }
}
    const [menu , setMenu]= useState(false);
  // BEM --> Block Element Modifier
  return (
    <div className='fake_news_detection__navbar' >
        <div className="fake_news_detection__navbar-links">
          <div className="fake_news_detection__navbar-links_logo">
              <img src={logo} alt='logo' />
              <div className="fake_news_detection__navbar-links_logo-name">
              <h3>VERIFY</h3>
              <p>arabic news</p> 
              </div>
            </div>
            <div className="fake_news_detection__navbar-links_container">
              <Menu NavgatTo={NavgatTo}/>
            </div>
        </div>
            
            <div className='fake_news_detection__navbar-menu'>
            {
              menu ?
              <RiCloseLine size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
              :
              <RiMenu3Line size={25} color='#fff' onClick={()=> setMenu((M)=> !M)}/>
            }
            {
              menu &&
              <div className='fake_news_detection__navbar-menu_container scale-up-center'>
                <div className='fake_news_detection__navbar-menu_container-links'>
                  <Menu NavgatTo={NavgatTo}/>
                </div>
                
              </div>    
            }
            </div>
              
            
        
       
    </div>
  )
}

export default NavBar
