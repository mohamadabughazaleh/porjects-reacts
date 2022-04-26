import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RiFacebookCircleFill } from "react-icons/ri";

const Review = () => {
  const[index,setIndex]=useState(0);
  const{name,job, image, text,id}= people[index];
  const [read ,setRead]=useState(false);
  const checkNumber=(number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number<0){
      return people.length -1;
    }
    return number;

  }
  const nextPerson=()=>{
    setIndex((index)=>{
      let newIndex=index+1;
      return checkNumber(newIndex);
    })
  }
  const prevPerson=()=>{
    setIndex((index)=>{
      let newIndex=index-1;
      return checkNumber(newIndex);
    });
  };
  
function randomm() {
 const Random= Math.floor(Math.random() * people.length);
return Random;
}

  return(
    
    <article className="review">
    <div className="img-container">
    <img src={image} alt={name} className="person-img"/>
    <span className='quote-icon'>
      <RiFacebookCircleFill/>
    </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{read ? text :`${text.substring(0,100)}`} {'  '}
    <span className="random-btn" onClick={()=>setRead(!read)}>{read ?"less read":"more raed"}</span>
    </p>
    <div className='button-container'>
      <button onClick={()=>nextPerson()} className='prev-btn'>
        <FaChevronLeft/>
      </button>
      <button onClick={()=>prevPerson()} className='next-btn'>
        <FaChevronRight/>
      </button>
      <button onClick={()=>setIndex(randomm())} className='random-btn'>
      surprise me
      </button>
    </div>
    </article>

  )
};

export default Review;
