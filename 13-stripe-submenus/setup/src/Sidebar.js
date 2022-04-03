import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()

  return <div className={`${ isSidebarOpen ? 'sidebar sidebar__open' : 'sidebar'}`}>
      {sublinks.map((link, index) => {
        return <div key={index} className="sidebar__section">

              <h3>{link.page}</h3>

              <ul className='sidebar__link-list'>
                {link.links.map((elem, index) => {
                  const {label, icon, url} = elem
                  return <li key={index}> <a href={url}> {icon} {label} </a> </li>
                })}
              </ul>

              </div>
      })}
      <button className="sidebar-close-btn" onClick={() => closeSidebar()}> <FaTimes /> </button>
    </div>
}

export default Sidebar
