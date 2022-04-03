import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSubmenu, setShownSubm, openSidebar} = useGlobalContext()

  function overSubm(event) {
    openSubmenu()
    if(!isNaN(parseInt(event.target.accessKey)) && parseInt(event.target.accessKey) != null) {
      setShownSubm(parseInt(event.target.accessKey))
    }
  }

  return <div className="navbar">
    <div className="logo__wrapper">
      <img src={logo} className="logo" />
    </div>

    <ul className='navbar__links'>
      {sublinks.map((link, index) => {
        return <li key={index} 
                   accessKey={index}
                   onMouseEnter={overSubm}>
              <a href='#'>{link.page}</a>
              </li>
      })}
    </ul>

    <button className="sign-in-btn">SignIn</button>
    <button className='sidebar-btn' onClick={() => openSidebar()}> <FaBars className='sidebar-bars'/> </button>

  </div>
}

export default Navbar
