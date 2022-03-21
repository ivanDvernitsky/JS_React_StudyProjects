import React from 'react';
import Tour from './Tour';

const Tours = (props) => {

  const displayTours = props.tours.map(tour => {
    return <Tour key={tour.id} tour={tour} removeToor={props.removeToor} />
  })

  return (
    <div className='tours-wrapper'>
      <h1 className='our-tours-header'>Our tours</h1>

      {displayTours}

    </div>
  )
};

export default Tours;
