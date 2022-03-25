import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items)

  function clickAll() {
    setMenu(items)
  }

  function clickBreakfast() {
    setMenu(items.filter(item => item.category === 'breakfast'))
  }

  function clickLunch() {
    setMenu(items.filter(item => item.category === 'lunch'))
  }

  function clickShakes() {
    setMenu(items.filter(item => item.category === 'shakes'))
  }

  return (
    <div className='container'>
      <h1 className='header'>Our Menu</h1>

      <Categories clickAll={clickAll}
                  clickBreakfast={clickBreakfast}
                  clickLunch={clickLunch}
                  clickShakes={clickShakes}
      />

      < Menu menu={menu} />
    </div>
  )
}

export default App;
