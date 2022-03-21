import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Refresh from './Refresh'

const url = 'https://course-api.com/react-tours-project'
function App() {

  const[loading, setLoading] = useState(false)
  const[tours, setTours] = useState([])
  const[refresh, setRefresh] = useState(false)

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [refresh])

  function removeToor(id) {
    const newTours = tours.filter((tour) => tour.id != id)
    setTours(newTours)

    if (tours.length === 1){
      setRefresh(true)
    }
  }

  if (loading) {
    return <Loading />
  }
  if (refresh) {
    return <Refresh setRefresh={setRefresh}/>
  }
  return (
    <div className='container'>

      <Tours tours={tours} removeToor={removeToor}/>

    </div>
  )
}

export default App
