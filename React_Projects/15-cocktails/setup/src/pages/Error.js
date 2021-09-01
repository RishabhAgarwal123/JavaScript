import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className='error-container'>
        <h1>Opps! A dead end</h1>
        <Link className="btn" to="/">Back Home</Link>
      </div>
    </section>
  )
}

export default Error
