import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  const getTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log('error');
    }
  }

  useEffect(() => {
    getTours();
  }, []);

  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No Tours Left</h2>
        <button className='btn' onClick={() => getTours()}>Refresh</button>
      </div>
    </main>
  }

  return <main>
    {isLoading && <Loading />}
    {isLoading || <Tours tours={tours} removeTour={removeTour} />}
  </main>
}

export default App
