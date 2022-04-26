import React from 'react';
import items from './data';
const Categories = ({filterItems,categories,NEWW}) => {
  return(
    <div className='btn-container'>
    <button type="button" className="filter-btn" onClick={() =>NEWW(items)}>{"all"}</button>
    {categories.map((category,id)=>{
      return <button type="button" className="filter-btn" onClick={() =>filterItems(category)} key={id}>{category}</button>
    })}
    </div>
  )};

export default Categories;
