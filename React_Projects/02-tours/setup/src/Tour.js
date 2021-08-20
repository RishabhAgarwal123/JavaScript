import React, { useState } from 'react';

const Tour = ({ id, image, name, info, price, remove }) => {
  const [show, setShow] = useState(false);
  return (
    <section className='single-tour'>
      <img src={image} alt={name}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>{show ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShow(!show)}>
            {show ? 'Show less' : 'Read more...'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => remove(id)}>Not Interested</button>
      </footer>
    </section>
  );
};

export default Tour;
