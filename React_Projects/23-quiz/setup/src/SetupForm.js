import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return <main>
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        <h2>Setup Form</h2>
        <div className='form-control'>
          <label htmlFor='amount'>Number of Questions</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='category'>Category</label>
          <select name='category' id='category' value={quiz.category} onChange={handleChange} className='form-input'>
            <option value='sports'>Sports</option>
            <option value='history'>History</option>
            <option value='politics'>Politics</option>
          </select>
        </div>

        <div className='form-control'>
          <label htmlFor='difficulty'>Select Difficulty</label>
          <select name='difficulty' id='difficulty' value={quiz.difficulty} onChange={handleChange} className='form-input'>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option>
          </select>
        </div>

        {error && <p className='error'>Can't generate questions please try different options</p>}
        <button onClick={handleSubmit} type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </section>
  </main>
}

export default SetupForm
