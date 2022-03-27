import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight, FaRegCaretSquareDown } from 'react-icons/fa';
import data from './data';
function App() {
  const [currPerson, setCurrPerson] = useState(0)
  const person = data[currPerson]

  function switchForward() {
    if (currPerson === data.length - 1) {
      setCurrPerson(0)
    } else {
      setCurrPerson(prev => prev + 1)
    }
  }
  function switchBackward() {
    if (currPerson === 0) {
      setCurrPerson(data.length - 1)
    } else {
      setCurrPerson(prev => prev - 1)
    }
  }

  useState(() => {
    setInterval(switchForward, 10000)
  }, [])

  return (
    <div className="container">
      <h1 className="header">Reviews</h1>

      <div className="content">

      <button onClick={switchBackward}>B</button>

      <div className="main">
        <img className='person-image' src={person.image} />
        <h2>{person.name}</h2>
        <h3>{person.title}</h3>
        <p>{person.quote}</p>
      </div>

      <button onClick={switchForward}>F</button>
      </div>
    </div>
  )
}

export default App;
