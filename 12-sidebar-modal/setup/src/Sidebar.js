import React, {useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { AppContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useContext(AppContext)

  return (
    <div className={`${ isSidebarOpen ? 'sidebar sidebar__show' : 'sidebar' }`}>
      <h3>Coding Addict</h3>
      <button className="close-sidebar-btn" onClick={closeSidebar}> <FaTimes className="close-sidebar-btn__icon" /> </button>

      <ul className="links">
        {links.map(link => {
          const {id, url, text, icon} = link
          return <li key={id}> 
          <a href={url}>{icon} {text}</a> 
          </li>
        } )}
      </ul>

      <ul className="social">
        {social.map(soc => {
          const {id, url, icon} = soc
          return <li key={id}>
            <a href={url}> {icon} </a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar
