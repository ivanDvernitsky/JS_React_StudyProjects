import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, removeItem }) => {
  const displayList = list.map((item, index) => {
    return <div className="list-item" key={index}>
       <span> {item} </span>
       <button onClick={() => removeItem(index)}>remove</button>
       </div>
  })

  return (
    <div className="list">
      {displayList}
    </div>
  )
}

export default List
