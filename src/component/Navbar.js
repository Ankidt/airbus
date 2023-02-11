import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {MediumContext} from './context/MediumContextProvider';
import "./style/Style.css";


const Navbar = () => {

  const { user , handleUserAuth } = useContext(MediumContext)

  return (
    
<nav className="bg border-gra"id="navbar-default">
  <div className="container  mx-auto">
    <a href="/" className="flex items-center">

        <span className="whitespace-nowrap">Airbus</span>
    </a>
    <div className="hidden w-auto" >
      <div className="navbar"id="navbar-default">
        <div>
          <Link to="/Search" className="block-white" 
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
          <Link to="/Login" onClick={handleUserAuth} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
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