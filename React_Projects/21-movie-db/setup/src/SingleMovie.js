import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, message: '' });

  const fetchSingleMovie = async (api_endpoint) => {
    try {
      const data = await fetch(api_endpoint);
      const response = await data.json();
      if (response.Response === 'False') {
        setError({ show: true, message: response.Error });
      } else {
        setMovie(response);
        console.log(response);
        setError({ show: false, message: '' })
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSingleMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id]);

  if (loading) {
    return <div className='loading'></div>
  }

  if (error.show) {
    return <div className='page-error'>
      <h1>{error.message}</h1>
      <Link to='/' className='btn'>
        Back To Movies
      </Link>
    </div>
  }

  const { Poster, Title, Year, Plot } = movie;

  return <section className='single-movie'>
    <img src={Poster} alt={Title} />
    <div className='single-movie-info'>
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <h4>{Year}</h4>
      <Link to='/' className='btn'>
        {loading ? '' : 'Back To Movies'}
      </Link>
    </div>
  </section>
}

export default SingleMovie
