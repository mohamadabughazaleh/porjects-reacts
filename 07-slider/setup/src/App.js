import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import logo from "../src/img/logo";
import images from "../src/img/images";
const url=`https://www.breakingbadapi.com/api/characters/`;
function App() {
  const[Loading ,setLoading]= useState(true);
  const[index, setIndex]=useState(0);
  const[jobs, setJobs]= useState([])
  const fetchJobs= async () => {
  const response= await fetch(url);
  let newJobs= await response.json();
  setJobs(newJobs);
  setInterval(() => {
  setLoading(false)  
  }, 1000);

  }

  useEffect(() => {
    fetchJobs();
    setInterval(() => {
    setIndex(index+1);
  },3000);
  return()=>clearInterval()

  },[index]);
  /*
  const checkNumber=(number)=>{
    if(number > jobs.length ){
      return number;
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
*/

if(Loading){
return (
<>
  <img className='divpr' src={images} alt='nice'/>
  <div class="bb">
  <img className='imgee' src={logo} alt='good'/>
  </div>
  </>
)
}


  return(
    <section className='section'>
      <div className='title'>
        <h2>
        breakingbad
        </h2>
      </div>
      <div className='section-center'>
          <article>
          <img src={jobs[index].img} alt={jobs[index].status} className='person-img'/>
          <h4>{jobs[index].name}</h4>
          <p className='title'>{jobs[index].nickname}</p>
          <p className='text'>{jobs[index].birthday}</p>
          <p className='text'>{jobs[index].occupation[0]}</p>
          <FaQuoteRight className='icon'></FaQuoteRight>
        </article>
        <button className='prev' onClick={()=>setIndex(index+1)}>
          <FiChevronLeft/>
        </button>
        <button onClick={()=>setIndex(index - 1)} className='next'>
          <FiChevronRight/>
        </button>
        
      </div>
    </section>
  )
}

export default App;
