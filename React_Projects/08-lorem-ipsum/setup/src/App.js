import React, { useState } from 'react';
import data from './data';

function App() {
  const [paragraph, setParagraph] = useState([]);
  const [count, setCount] = useState(0);

  const handlePara = (event) => {
    event.preventDefault();
    setParagraph(data);

    let amount = parseInt(count);

    if (count <= 0) {
      amount = 1;
    }

    if (count >= 8) {
      amount = 8
    }

    setParagraph(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3> tired of boring ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='para'>Paragraphs</label>
        <input type='number' name="para" value={count} onChange={(event) => setCount(event.target.value)} />
        <button type='button' onClick={handlePara} className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          paragraph.map((para, index) => {
            return <p key={index}>{para}</p>
          })
        }
      </article>
    </section>
  )
}

export default App;
