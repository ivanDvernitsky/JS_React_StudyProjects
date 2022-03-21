import React, { useState } from 'react';

const Tour = ({tour, removeToor}) => {

  const [showInfo, setShowInfo] = useState(false)

  function toggleReadMore() {
    setShowInfo(prev => !prev)
  }

  return(
    <div className='single-tour'>

      <img src={tour.image}/>

      <div className='single-tour-text'>
        <div className='name-and-price'>
          <h3>{tour.name}</h3>
          <h4>{tour.price}</h4>
        </div>
      <p>{showInfo ? tour.info : `${tour.info.substring(0, 200)}...  `}
      <button onClick={toggleReadMore}>&nbsp;&nbsp; {showInfo ? "Show Less" : "Show More"}</button>
      </p>
      </div>

      <button className='dismiss-btn' onClick={() => removeToor(tour.id)}> Not interested</button>

    </div>
  )
};

export default Tour;
