import React, {useState} from 'react'

export default function ListItem({item, index, removeItem}) {
    const [onEdit, setOnEdit] = useState(false)
    const [element, setElement] = useState('')

    function startEditElem (event) {
        console.log(event.target.accessKey);
        setOnEdit(true)
      }

    return (
        <div className="list-item" key={index}>
       {onEdit ? <input type="text"  placeholder={item} onChange={(e) => setElement(e.target.value)} /> : <span> {item} </span>}
       <div className="re-btns">
        {onEdit ? <button accessKey={index} >Ok</button> : <button className='edit-btn' onClick={startEditElem}>edit</button>}
        <button onClick={() => removeItem(index)}>remove</button>
       </div>

       </div>
    )
}