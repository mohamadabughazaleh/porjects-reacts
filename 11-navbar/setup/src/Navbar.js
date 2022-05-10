import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { links, social } from './data'
import logoe from './logo.svg'
const Navbar = ({namee}) => {
  const newdatee=new Date( 2012,2,2);
  const newdate=new Date();
const m=[1,2,36];
  const[change,setchange]=useState(false);
  const Change=useRef(null);
  const linksContainerRef=useRef(null);
  useEffect(() => {
    if(change){
      linksContainerRef.current.style.height="100%";
    }else{
      linksContainerRef.current.style.height="0px";
    }
  },[change])
  
  function title(title){
    document.title=title;
  }
  return (
    <nav>
    <div className='nav-center'>
    <div className="nav-header">
      <img src={logoe} alt="logo" />
      <button onClick={()=>setchange(!change)} className="nav-toggle">
      <FaBars />
    </button>
    </div>
      <div className='links-container' ref={linksContainerRef}>
      <ul className="links" ref={Change}>
    {links.map((item)=>{
      const{ id,url,text}=item;
      return( <li key={id}>
      <a   href={url} onClick={()=>title(text)}>{text}</a>
      </li>
      )})}
      </ul>
      </div>
    <ul className="social-icons">
    {social.map((socials)=>{
      const{ id,url,icon}=socials;
      return( <li key={id}>
        <a href={url}>{icon}</a>
      </li>
      )})}
    </ul>
    </div>    
  </nav>
  )}

export default Navbar
