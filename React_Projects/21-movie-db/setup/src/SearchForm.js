import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { searchQuery, setSearchQuery, error } = useGlobalContext();
  return <form className='search-form' onSubmit={(event) => event.preventDefault()}>
    <h2>Search Movies</h2>
    <input type='text' placeholder='Type a movie name' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className='form-input' />
    {error.show && <div className='error'>{error.message}</div>}
  </form>
}

export default SearchForm
