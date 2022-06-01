import React from "react";
import {useState} from 'react';




function Button(props) {



    const buttonStyle = {cursor: 'pointer', font: '2rem', outline: 'none', background: 'white', border: '2px solid grey'}


    return (
        <button style={buttonStyle} >{props.name}</button>
    )
}
export default Button