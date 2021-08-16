import React, { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState('Rishabh'));  Need to pass an default value to this function
  // returns an array of a value and a function
  // const value = useState('Rishabh')[0];  returns a value
  // const handler = useState('Rishabh')[1];  This will return function which will handle teh functionality
  // console.log(value, handler);

  // Use destructuring
  const [text, setText] = useState('initial Value');

  const handleClick = function () {
    text === 'initial Value' ? setText('useState checked') : setText('initial Value');
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>{text}</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
