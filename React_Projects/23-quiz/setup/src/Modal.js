import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correctAnswer, questions } = useGlobalContext();
  return <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
    <div className='modal-content'>
      <h2>Congrats</h2>
      <p>You answered of {((correctAnswer / questions.length) * 100).toFixed(2)}% questions correctly</p>
      <button className='close-btn' onClick={closeModal}>Play Again</button>
    </div>
  </div>
}

export default Modal
