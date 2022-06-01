import React, { useState } from 'react';

function Example(props) {

    const [count, setCount] = useState(0);
    const buttonStyle = {cursor: 'pointer', font: '2rem', outline: 'none', background: 'white', border: '2px solid grey'}
    return (
        <div>
            <p>You clicked {count} times</p>
            <button style={buttonStyle} onClick={() => setCount(count + 1)}>
                {props.text}
            </button>
        </div>
    );
}
export default Example;