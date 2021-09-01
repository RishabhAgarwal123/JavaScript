import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchText } = useGlobalContext();
  const searchValue = useRef('');

  const searchCocktail = () => {
    setSearchText(searchValue.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
