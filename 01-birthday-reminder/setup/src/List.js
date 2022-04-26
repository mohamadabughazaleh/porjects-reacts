import React from 'react';

const List = ({Setdataa}) => {
  return (
    <>
    {Setdataa.map((person)=>{
      const{id ,name ,age,image}=person;
      return<article key={id} className="person">
        <img src={image}/>
        <div>
          <h3> {name}</h3>
          <p>{age} years</p>
        </div>
      </article>
    })}
      
    </>
  );
};
export default List;
