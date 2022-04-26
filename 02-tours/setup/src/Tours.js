import React from 'react';
import Tour from './Tour';
const Tours = ({ tours,ID}) => {
  return( 
  <section>
    <div className='title'>
      <h2>ours tours</h2>
      <div className='underline'>
      </div>
      {tours.map((tour)=>{
      return <Tour key={tour.id} {...tour} removeTour={ID}></Tour>
      }
      )}
    </div>
  </section>
  );
};

export default Tours;
