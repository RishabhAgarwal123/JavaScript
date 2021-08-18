import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>Show Hide</button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return window.removeEventListener('resize', checkSize); // due to toggle it will call useffect again and again that's why need to remove
  }, [])
  return <div>
    <h1>Window</h1>
    <h3>Size : {size} px</h3>
  </div>
}

export default ShowHide;
