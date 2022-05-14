import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import{AppContext}from './context'

const Home = () => {
  const {openSidebar,openModal}=useContext(AppContext)
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
      <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        show modal
      </button>
    </main>
  )
}

export default Home;
