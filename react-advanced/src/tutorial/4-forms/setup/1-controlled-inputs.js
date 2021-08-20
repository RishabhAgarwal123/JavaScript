import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleForm = (event) => {
    event.preventDefault();
    // console.log(firstName, email);

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      })
      console.log(people);
      setFirstName('');
      setEmail('');
    }
  }
  return <>
    <article>
      <form className='form' onSubmit={handleForm}>
        <div className='form-control'>
          <label htmlFor='firstName'>Name:</label>
          <input id='firstName' name='firstName' type='text' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email:</label>
          <input id='email' name='email' type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>

        <button type='submit'>Add Person</button>
      </form>
      {
        people.map((person, index) => {
          const { id, firstName, email } = person;
          return <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </>;
};

export default ControlledInputs;
