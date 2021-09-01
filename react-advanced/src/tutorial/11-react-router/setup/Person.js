import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const [personName, setPersonName] = useState('Default Name');
  const { name } = useParams();

  useEffect(() => {
    const newName = data.find((person) => name === person.name);
    setPersonName(newName.name);
  }, []);

  return (
    <div>
      <h2>{personName}</h2>
      <Link to="/people" className='btn' >Back To People</Link>
    </div>
  );
};

export default Person;
