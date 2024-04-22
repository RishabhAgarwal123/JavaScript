import { useState } from 'react';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
            if (!response.ok) throw new Error('Network response was not ok');
            const jsonData = await response.json();
            setData(jsonData.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <button onClick={fetchData}>Fetch Data Using Fetch Api</button>
            {data && (
                <ul>
                    {data?.map(item => (
                        <li key={item.id}>{item.email}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataFetch