import React from "react"

import './Person.css'

function person(props) {
    return (
        <div className = {'Person'}>
            <p onClick = {props.clicked}><strong>My Name : </strong>{props.name}</p>
            <p><strong>My Age : </strong>{props.age}</p>
            <input type = 'text' onChange = {props.click} value = {props.name}></input>
        </div>
    );
}

export default person;