import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [list, setList] = useState([])
  const [listItem, setListItems] = useState('')

  function onSubmit(event) {
    event.preventDefault()
    setList(prev => [...prev, listItem])
    document.getElementById('prod-input').value = ''
  }

  function removeItem(num) {
    setList(prev => prev.filter((item, index) => index != num))
  }

  return (
    <div className="container">
      <h1 className='header'>Grocery Bud</h1>

      <form onSubmit={onSubmit}>
        <input id="prod-input" type="text" onChange={(e) => setListItems(e.target.value)}/>
        <button type='submit' >Submut</button>
      </form>

      <List list={list} removeItem={removeItem} />

      {list.length > 1 ? <button id='clear-all'> Clear All</button> : <></>}
    </div>
  )
}

export default App
