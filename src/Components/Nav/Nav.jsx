import React ,{useState,useEffect}from 'react'
import {Link} from "react-router-dom"
import "./Nav.css"
const Nav = () => {
    const [show,setShow]=useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else {
          setShow(false);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
    
        return () => window.removeEventListener("scroll", transitionNavBar);
      }, []);
  return (
    <nav className={`nav ${show && "nav-black"}`}>
        <div className='nav-content'>
          <Link to="/">
            <img  className="logo"src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
            </Link>
            <Link to ="/profile">
            <img  className="avatar"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>
            </Link> </div>

    </nav>
  )
}

export default Nav