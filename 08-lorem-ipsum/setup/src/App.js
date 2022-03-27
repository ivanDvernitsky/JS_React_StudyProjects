import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState(0)
  const [submit, setSubmit] = useState(false)
  
  function toggleVal(event) {
    setParagraphs(event.target.value)
  }

  const displayPar = data.map((par, index) => {
    if (index < paragraphs) {
      return <p className='parag' key={index}>{par}</p>
    }
  })

  return (
    <div className="container">
      <h1 className="header">Tired of boring Lorem Ipsum?</h1>

      <div className="input">
        <label>Number of paragraphs: </label>
        <input onClick={toggleVal} type='number' min='1' max='9'></input>
        <button onClick={() => setSubmit(true)} >Submit</button>
      </div>

      {submit  ? displayPar : "" }
    </div>
    )
}

export default App;
