import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      showAlert(true, 'Add Something', 'danger');
    } else if (name && isEdit) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item;
      }));
      setName('');
      setEditId(null);
      setIsEdit(false);
      showAlert(true, 'Item Updated', 'success');
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'Item Added Successfully', 'success');
    }
  }

  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, message, type });
  }

  const clearItems = () => {
    showAlert(true, 'Empty List', 'danger');
    setList([]);
  }

  const removeItem = (id) => {
    showAlert(true, 'Item Removed', 'danger');
    setList(list.filter((list) => list.id !== id));
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    setName(specificItem.title);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input type='text' className='grocery' placeholder='eg..Chicken' value={name} onChange={(event) => setName(event.target.value)} />
        <button type='submit' className='submit-btn'>{isEdit ? 'Edit' : 'Add'}</button>
      </div>
    </form>
    {
      list.length > 0 &&
      (<div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button type='button' className='clear-btn' onClick={clearItems}>Clear Items</button>
      </div>)
    }
  </section>
}

export default App
