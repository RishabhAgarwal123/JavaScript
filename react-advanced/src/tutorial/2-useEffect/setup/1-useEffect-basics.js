import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 1) {
      document.title = `New Message ${value}`;
      console.log('use effect');
    }
  }, [value]); // Value is the dependency that will trigger every time when it's value changes
  console.log('render component');
  return <>
    <h2>{value}</h2>
    <button type="button" className="btn" onClick={() => setValue(value + 1)}>Click me</button>
  </>;
};

export default UseEffectBasics;
