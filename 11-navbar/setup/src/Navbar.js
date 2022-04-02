import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
const Navbar = () => {
  const [showNav, setShowNav] = React.useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  function toggleNav() {
    setShowNav(prev => !prev)
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if (showNav) {
      linksContainerRef.current.style.visibility = 'visible' // `${linksHeight}px`
    } else {
      linksContainerRef.current.style.visibility = 'hidden'
    }
  }, [showNav])

  return (
    <>
    <div className="navbar">
      <h2 className="logo">Coding Addict</h2>

    <div className='nav-list' ref={linksContainerRef}>
      <ul ref={linksRef}>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contacts</li>
      </ul>
    </div>

      <div className='toggle-nav-btn__wrapper'><FaBars onClick={toggleNav} className="toggle-nav-btn" /></div>

      <div className="social-media">
      {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
      </div>
    </div>

    </>
  )
}

export default Navbar
