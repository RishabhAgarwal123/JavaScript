import React, { useEffect, useState } from 'react'

// useEffect is used to handle side effects in functional components. This can include data fetching, subscriptions, or manual 
// DOM manipulation. You can control when the effect runs by providing an array of dependencies.

const UseEffect = () => {
    const [data, setData] = useState(null);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => setData(data));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    )
}

export default UseEffect