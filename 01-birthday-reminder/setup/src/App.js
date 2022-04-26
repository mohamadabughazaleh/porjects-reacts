import React, { useState ,useEffect,Fragment } from 'react';
import data from './data';
import List from './List';
function App() {

  const[people ,setpeople]=useState(data);
  
  const[A,setA]=useState(true);

  function Add(){setA(!A);}

  return(
   <main>
    <section className='container'>
      <h3>{A?people.length:'0'} birthadays today</h3>
      {A && (<List Setdataa={people}/>)}
      <button onClick={() =>Add()}> clear all </button>
    </section>
  </main>
  )}

export default App;
