import React from 'react';

const Categories = (props) => {
  
  return ( 
    <div className='nav'>
      <button onClick={props.clickAll}>All</button>
      <button onClick={props.clickBreakfast}>Breakfast</button>
      <button onClick={props.clickLunch}>Lunch</button>
      <button onClick={props.clickShakes}>Shakes</button>
    </div>
  )
};

export default Categories;
