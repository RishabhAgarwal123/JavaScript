import React from 'react';

const ErrorExample = () => {
  let title = 'Random';

  const handleClick = function () {
    console.log(title);
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>Click Me</button>
    </React.Fragment>
  );
};

export default ErrorExample;
