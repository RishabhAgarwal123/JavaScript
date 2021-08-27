import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// reducer function
import reducer from './reducer';

const defaultState = {
  people: data,
  showModal: false,
  modalContent: ''
}

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newPeople });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return <>
    {state.showModal && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <button type='submit'>Add</button>
    </form>
    {
      state.people.map((person) => {
        const { id, name } = person;
        return <div key={id} className='item'>
          <h4>{name}</h4>
          <button type='button' onClick={() => {
            dispatch({ type: 'REMOVE_ITEM', payload: id })
          }}>Remove</button>
        </div>
      })
    }
  </>
};

export default Index;
