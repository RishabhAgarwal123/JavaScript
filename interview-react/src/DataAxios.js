import React, { useState } from 'react'
import axios  from 'axios';

const DataAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
      setData(response.data.data.data);
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
      <button onClick={fetchData}>Fetch Data Using Axios</button>
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

export default DataAxios