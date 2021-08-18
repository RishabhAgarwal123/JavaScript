import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    return setPeople([]);
  }
  return <main>
    <section className="container">
      <h3>{people.length} Birthday's Today</h3>
      <List people={people} />
      <button type="button" onClick={handleClick}>Clear All</button>
    </section>
  </main>;
}

export default App;
