import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refs = useRef(null);

  const handleInput = (event) => {
    event.preventDefault();
    console.log(refs.current.value);
  }

  return <>
    <h2>useRef</h2>
    <form className='form'>
      <div>
        <input type='text' ref={refs} />
        <input type='text' ref={refs} />
        <button type='button' onClick={handleInput}> Submit </button>
      </div>
    </form>
  </>
};

export default UseRefBasics;
