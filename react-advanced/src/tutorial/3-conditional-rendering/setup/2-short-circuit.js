import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setError] = useState(true);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h2>short circuit</h2>
      <h1>{text || 'Rishabh Agarwal'}</h1>
      <h2>{text && 'gbhchkjfjhcg'}</h2>
      <button className='btn' onClick={() => setError(!isError)}>Check Error</button>
      {isError ? <h1>Rishabh Agarwal</h1> : <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
