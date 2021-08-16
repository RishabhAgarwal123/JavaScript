import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (personId) => {
    setPeople(people.filter((person) => person.id !== personId));
  }

  return (
    <React.Fragment>
      {
        people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button type="button" onClick={() => removeItem(id)}>Remove Person</button>
            </div>
          );
        })
      }
      <button type="button" className="btn" onClick={() => setPeople([])}>Clear Persons</button>
    </React.Fragment>
  );
};

export default UseStateArray;
