import React, {useState} from "react";

export default function Question(props) {
    const [show, setShow] = useState(false)

    function toggleShow() {
        setShow(prev => !prev)
    }

    return (
        <div className="question">
            <div className="q-and-b">
                <h3>{props.title}</h3>
                <button onClick={toggleShow}>{show ? '-' : '+'}</button>
            </div>

           {show && <p>{props.info}</p>}
        </div>
    )
}