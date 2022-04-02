import React, {useState} from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import ListItem from 'ListItem'

const List = ({ list, setList, removeItem }) => {

  // function submitEdit(event) {
  //   setList(prev => prev.map((item, index) => {
  //     console.log(event.target.accessKey);
  //     if (index === parseInt(event.target.accessKey)) {
  //       return element
  //     } else {
  //       return item
  //     }
  //   }))
  // }

  console.log(element);

  const displayList = list.map((item, index) => {
    return <ListItem item={item} index={index} removeItem={removeItem}/>
  })

  return (
    <div className="list">
      {displayList}
    </div>
  )
}

export default List
