import React, {useState} from 'react'

export default function Tab({job}) {
    const displayDuties = job.duties.map((dutie, index) => {
        return <li key={index} >{dutie}</li>
    })

    return (
        <div className='tab-wrapper'>
            <h2> {job.title} </h2>
            <h3>{job.company}</h3>
            <h4>{job.dates} </h4>
            {displayDuties}
        </div>
    )
}