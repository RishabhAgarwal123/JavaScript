import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Rishabh', age: 25 });
  const { name, age } = person;

  const changeDetails = () => {
    setPerson({ ...person, name: 'Rishi' });
  }

  return (
    <>
      <h2>useState object example</h2>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <button type="button" className="btn" onClick={changeDetails}>Change details</button>
    </>
  );
};

export default UseStateObject;
