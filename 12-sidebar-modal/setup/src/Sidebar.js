import React,{ useContext} from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data'
import { AppContext } from './context';

const Sidebar = () => {
  const{isSidebarOpen, closeSidebar}=useContext(AppContext)
  return (
    <aside className={`${isSidebarOpen?"sidebar show-sidebar":"sidebar"}`}>
    <div className="sidebar-header">
    <img src={logo} className="logo" alt="coding addict"/>
    <button onClick={closeSidebar} className='close-btn'>
    <FaTimes/>

    </button>
    </div>
    <ul className="links">
      {links.map((link)=>{
        const { id, url, text,icon}=link;
        return(
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>

        )
      
      })}
    </ul>
    <ul className="social-icons">
      {social.map((socials)=>{
        const { id, url, icon } = socials;
        return(
          <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
    </aside>
  )
}

export default Sidebar
