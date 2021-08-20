import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(1);
  const { id, name, image, text, job } = people[index];

  const checkIndex = (idx) => {
    if (idx > people.length - 1) {
      return 0;
    }
    if (idx < 0) {
      return people.length - 1;
    }
    return idx;
  }

  const prevPerson = () => {
    setIndex((index) => {
      return checkIndex(index - 1);
    });
  }

  const nextPerson = () => {
    setIndex((index) => {
      return checkIndex(index + 1);
    });
  }

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.trunc(Math.random() * people.length) + 1;
      return checkIndex(newIndex);
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} name={name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className="job">{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Surprise Me</button>
    </article>
  );
};

export default Review;
