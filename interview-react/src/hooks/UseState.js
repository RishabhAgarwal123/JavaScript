import React, { useState } from 'react'
// useState is a React hook used to manage state in a functional component. It returns a state variable and a function to update 
// that state. It can be used to track values that change over time, like user input or UI state.
const UseState = () => {
    const [counter, setCounter] = useState(0);
    const styles = {
        border: '1px solid black'
    }
    return (
        <div style={styles}>
            <p>You clicked {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}

export default UseState