import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('Name');
  const [value, setValue] = useState('Random Person');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const person = data.results[0];
      const { phone, email } = person;
      const image = person.picture.large;
      const password = person.login.password;
      const { first, last } = person.name;
      const dob = person.dob.age;
      const { number, name } = person.location.street;

      const user = {
        name: `${first} ${last}`,
        street: `${number} ${name}`,
        phone,
        email,
        image,
        password,
        dob
      }

      setPerson(user);
      setValue(user.name);
      setTitle('Name');
    }
    catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1> Loading.... </h1>
  }

  const handleValue = (event) => {
    if (event.target.classList.contains('icon')) {
      const newValue = event.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  }

  return <main>
    <div className='block bcg-black'></div>
    <div className='block'>
      <div className='container'>
        <img src={(person && person.image) || defaultImage} alt='Random user' className='user-img' />
        <p className='user-title'>My {title} is </p>
        <p className='user-value'>{value}</p>
        <div className='values-list'>
          <button className='icon' data-label='name' onMouseOver={handleValue}>
            <FaUser />
          </button>
          <button className='icon' data-label='email' onMouseOver={handleValue}>
            <FaEnvelopeOpen />
          </button>
          <button className='icon' data-label='dob' onMouseOver={handleValue}>
            <FaCalendarTimes />
          </button>
          <button className='icon' data-label='street' onMouseOver={handleValue}>
            <FaMap />
          </button>
          <button className='icon' data-label='phone' onMouseOver={handleValue}>
            <FaPhone />
          </button>
          <button className='icon' data-label='password' onMouseOver={handleValue}>
            <FaLock />
          </button>
        </div>
        <button className='btn' type='button' onClick={fetchData}>
          {loading ? 'Loading...' : 'Random User'}
        </button>
      </div>
    </div>
  </main>
}

export default App
