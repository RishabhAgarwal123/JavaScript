import React, { useCallback, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    // useCallback is used to memoize a callback function. This can be useful when you pass a callback to a child component and want 
    // to prevent unnecessary re-rendering due to changing references.

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]); // The callback is memoized and only redefined when `count` changes

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
    );
}

export default Counter;
