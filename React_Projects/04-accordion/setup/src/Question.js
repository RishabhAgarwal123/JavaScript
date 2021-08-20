import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const SingleQuestion = (question) => {
  const [showInfo, setShowInfo] = useState(false);
  const { title, info } = question;

  const handleClick = (showInfo) => {
    setShowInfo(!showInfo);
  }

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => handleClick(showInfo)}>
        {showInfo && <AiOutlineMinus />}
        {!showInfo && <AiOutlinePlus />}
      </button>
    </header>
    {showInfo && <p>{info}</p>}
  </article>
};

export default SingleQuestion;
