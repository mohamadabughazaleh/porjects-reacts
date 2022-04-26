import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data'; 
function App() {
  const[menuItems, setMenuItems]= useState(items);
  const filterItems=(category)=>{
    const newItems= items.filter((item)=>item.category===category)
    setMenuItems(newItems);
  }
  const allCategories=[...new Set(items.map((item)=>item.category))];
  return(
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} NEWW={setMenuItems} categories={allCategories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
