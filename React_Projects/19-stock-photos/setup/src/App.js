import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const fetchPhotos = async () => {
    setLoading(true);
    let url;
    const pageNumber = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${pageNumber}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${pageNumber}`;
    }

    try {
      const data = await fetch(url);
      const response = await data.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) { return response.results; }
        else if (query) { return [...oldPhotos, ...response.results]; }
        else { return [...oldPhotos, ...response]; }
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPhotos();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (!loading && (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
        setPage((oldPage) => {
          return oldPage + 1;
        })
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setPage(1);
    fetchPhotos();
  }

  return <main>
    <h1>{loading ? 'Loading...' : ''}</h1>
    <section className='search'>
      <form className='search-form'>
        <input type='text' placeholder='Search Photo' className='form-input' value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type='submit' className='submit-btn' onClick={handleSubmit}><FaSearch /></button>
      </form>
    </section>
    <section className='photos'>
      <div className='photos-center'>
        {
          photos.map((photo, index) => {
            return <Photo key={index} {...photo} />
          })
        }
      </div>
      {loading && <h1 className='loading'> Loading... </h1>}
    </section>
  </main>
}

export default App
