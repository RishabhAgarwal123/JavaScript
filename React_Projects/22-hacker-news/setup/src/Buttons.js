import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { loading, page, nbPages, handlePage } = useGlobalContext();
  return <div className='btn-container'>
    <button disabled={loading} className='btn' onClick={() => handlePage('prev')}>Prev</button>
    <p>{page + 1} of {nbPages}</p>
    <button disabled={loading} className='btn' onClick={() => handlePage('next')}>Next</button>
  </div>
}

export default Buttons
