import React,{ useState, useEffect}  from 'react'
import Navbar from './Navbar';
function App() {
  const[name, setName]=useState("mohamad")
const[loding,setLoading]=useState(true);
useEffect(() => {
  setInterval(() => {
    setLoading(false)
  }, 3000);
 
},[])
if(loding){
  return (
    <div className="kk">
<div class="container">
	<div class="📦"></div>
	<div class="📦"></div>
	<div class="📦"></div>
	<div class="📦"></div>
	<div class="📦"></div>
</div>
</div>
  ) 
}
  return (
 <Navbar namee={name}  />
  )
}

export default App
