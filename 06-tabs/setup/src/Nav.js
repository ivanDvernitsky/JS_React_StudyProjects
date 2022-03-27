import React, {useState} from 'react'

export default function Nav({setCurrentJob, jobs}) {
    const [sidebar, setSidebar] = useState([]);

    const selStyles = {
        color: '#32CFD4',
        borderLeft: '3px solid #32CFD4' 
    }

    function switchTab(event) {
        setCurrentJob(jobs[event.target.accessKey])
    }

    const displayNav = jobs.map((job, index) => {
        return <button onClick={switchTab} 
                       key={index} 
                       accessKey={index} 
                       style={selStyles}
                       className='nav__elem'>
                            {job.company}
                </button>
    })

    return (
        <div className='nav'>
            {displayNav}
        </div>
    )
}