import React from 'react'

export default function Refresh({setRefresh}) {
    return (
        <div className='refresh'>
            <h1>No tours left</h1>
            <button onClick={() => setRefresh(false)}>Refresh?</button>
        </div>
    )
}