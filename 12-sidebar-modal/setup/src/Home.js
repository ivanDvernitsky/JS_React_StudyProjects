import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useContext(AppContext)
  return (
    <>
    <section className="main">
      <button className="sidebar-btn" onClick={openSidebar}>
        <FaBars className='sidebar-btn__icon'/>
      </button>

      <button className='modal-btn' onClick={openModal}>Show Modal</button>
      </section>
    </>
  )
}

export default Home
