import React from 'react';

const Menu = (props) => {
  const displayMenu = props.menu.map(item => {
    return (<div className='menu__item' key={item.id}>
      
      <img src={item.img} />

      <div className='info'>
        <div className='info-title'>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        </div>

        <p>{item.desc}</p>
      </div>
    </div>)
  })

  return (
    <div className='menu'>
      {displayMenu}
    </div>
  )
};

export default Menu;
