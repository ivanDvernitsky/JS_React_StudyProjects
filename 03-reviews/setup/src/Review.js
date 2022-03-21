import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [currentPerson, setCurrentPerson] = useState(0)
  const [person, setPerson] = useState(people[currentPerson])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function clickForvard() {
    if (currentPerson === people.length - 1) {
      setCurrentPerson(0)
      setPerson(people[currentPerson])
    } else {
      setCurrentPerson(prev => prev + 1)
      setPerson(people[currentPerson])
    }
  }

  function clickBackward() {
    if (currentPerson === 0) {
      setCurrentPerson(people.length - 1)
      setPerson(people[currentPerson])
    } else {
      setCurrentPerson(prev => prev - 1)
      setPerson(people[currentPerson])
    }
  }

  function clickSurprise() {
    setCurrentPerson(getRandomInt(people.length))
    setPerson(people[currentPerson])
  }

  return (
    <div className='review-wrapper'>
      <img className='person-image' src={person.image}/>
      <h2>{person.name}</h2>
      <h4>{person.job}</h4>
      <p>{person.text}</p>

      <div className='toggle-btns-wrapper'>
      <button className='fb-btns' onClick={clickBackward}>backwards</button>
      <button className='fb-btns' onClick={clickForvard}>forvard</button>
      </div>

      <button className='random-btn' onClick={clickSurprise}>Surprise Me</button>
    </div>
  )
};

export default Review;
