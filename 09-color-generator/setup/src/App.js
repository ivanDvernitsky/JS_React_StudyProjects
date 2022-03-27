import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const defList = new Values('#f15025').all(10)

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(defList)

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors)
    } catch (error) {
      setError(true)
    }
  }

  const displayColors = list.map((col, index) => {
    return <SingleColor key={index} color={col} id={index}/>
  })

  return (
    <section>
      <div className='container'>
        <h3>Color generator</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" value = {color} 
          onChange = {(e) => setColor(e.target.value)}
          placeholder='#f15025'
          style={{border: error ? '2px solid red' : 'none'}}
          />
          <button className="btn" type='submit'>Submit</button>
        </form>
      </div>

      <div className="colors">
        {displayColors}
      </div>
    </section>
  )
}

export default App
