import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import backg from '../component/5858.jpg';
import {MediumContext} from './context/MediumContextProvider';
import "./style/Style.css";


const Navbar = () => {

  const { user , handleUserAuth } = useContext(MediumContext)

  return (
    
<nav className="bg border-gra"id="navbar-default"
    // style={{backgroundImage: `url(${backg})`}}
    >
  <div className="container  mx-auto">
    <a href="/" className="flex items-center">
  
        <span className="whitespace-nowrap" id='airbus'>
          <i className="fa-solid fa-plane-departure"></i>
          Airbus
        </span>
    </a>
    <div className="hidden w-auto" >
      <div className="navbar"id="navbar-default">
        <div>
          <Link to="/Search" className="block-white" id='home'
            >Home</Link>
        </div>
      
      
        
        <div>
         { 
         user ?
          <img
            src={user.photoURL}
            alt='logo'
            width={30}
            height={30}
            className='rounded'
          /> 
          :
          <Link to="/Login" onClick={handleUserAuth} className="block-hover:bg-transparent" id="login">
          Login</Link>
         }
        </div>
      </div>
    </div>
  </div>
</nav>
// onClick={handleUserAuth}

  )
}

export default Navbar;