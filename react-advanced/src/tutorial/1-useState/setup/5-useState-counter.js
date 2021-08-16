import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={() => setValue(value + 1)}>Increase</button>
        <button type="button" className="btn" onClick={() => setValue(value - 1)}>Decrease</button>
        <button type="button" className="btn" onClick={() => setValue(0)}>Reset</button>
      </section>
    </>
  );
};

export default UseStateCounter;
