import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, id }) => {
  const rgb = `#${color.rgb[0].toString(16)}${color.rgb[1].toString(16)}${color.rgb[2].toString(16)}`

  const [copied, setCopied] = useState(false)

  function copyColor() {
    navigator.clipboard.writeText(rgb)
    setCopied(true)
  }
  useEffect(() => {
    setTimeout(() => setCopied(false), 3000)
  }, [copied])

  return (
    <div className="single-color" 
    onClick={copyColor}
         style={{ backgroundColor: `rgb(${color.rgb[0]}, ${color.rgb[1]}, ${color.rgb[2]})`,
                  color: id > 8 ? 'white' : 'black'
                  }}>
      <span>{rgb}</span> 
      <br/>
      <span className='percent'>{color.weight}% </span>
      <br/>
      <span className='copied-msg'>{copied ? 'Copied To clipboard' : ''}</span>
    </div>
    )
}

export default SingleColor
