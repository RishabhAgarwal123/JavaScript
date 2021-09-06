import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  // const debounceMethod = function (func, delay) {
  //   console.log(func)
  //   let timer;
  //   let context = this;
  //   let args = arguments;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(context, args);
  //     }, delay);
  //   }
  // }

  // const search = (event) => {}

  return <form className='search-form' onSubmit={(event) => event.preventDefault()}>
    <h2>Search Hacker News</h2>
    <input className='form-input' value={query} onChange={(event) => handleSearch(event.target.value)} />
  </form>
}

export default SearchForm
