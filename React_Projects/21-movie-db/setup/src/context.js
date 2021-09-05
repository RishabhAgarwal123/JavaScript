import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, message: '' });
  const [searchQuery, setSearchQuery] = useState('avengers');

  const fetchMovies = async (api_endpoint) => {
    try {
      const data = await fetch(api_endpoint);
      const response = await data.json();
      if (response.Response === 'True') {
        setMovies(response.Search);
        setError({ show: false, message: '' })
      } else {
        setError({ show: true, message: response.Error });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${searchQuery}`);
  }, [searchQuery]);

  return <AppContext.Provider value={{ loading, error, movies, searchQuery, setSearchQuery }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
