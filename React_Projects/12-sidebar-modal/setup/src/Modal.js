import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {

  const closeModal = () => {
    console.log('modal Close');
  }

  return <div className={`modal-overlay`}>
    <div className='modal-container'>
      <h3>Modal Content</h3>
      <button className='close-modal-btn' onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
