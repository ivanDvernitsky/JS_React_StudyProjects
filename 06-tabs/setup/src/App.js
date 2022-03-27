import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import Nav from './Nav'
import Tab from './Tab'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentJob, setCurrentJob] = React.useState({})

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()

    setJobs(newJobs)
    setCurrentJob(newJobs[0])
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  } else {

    return (
      <div className='container'>

        <h1 className='main-header' >Experience</h1>

        <section className='main'>
        <Nav setCurrentJob={setCurrentJob} jobs={jobs} />
        <Tab job={currentJob} />
        </section>

      </div>

    )
  }
}

export default App
