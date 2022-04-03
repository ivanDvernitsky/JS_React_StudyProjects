import React, { useState, useRef, useEffect } from 'react'
import sublinks from './data'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Submenu = () => {
  const {shownSubm, isSubmenuOpen, closeSubmenu} = useGlobalContext()
  const currSubm = sublinks[shownSubm]

  return <div className={`${ isSubmenuOpen ? 'submenu submenu__open' : 'submenu' }`}
              onMouseLeave={() => closeSubmenu()}>

    <h3>{currSubm.page}</h3>

    <ul className="submenu__links">
      {currSubm.links.map((link, index) => {
        const {label, icon, url} = link
        return <li key={index}>
          <a href={url}>{icon} {label}</a>
        </li>
      })}
    </ul>

  </div>
}

export default Submenu
