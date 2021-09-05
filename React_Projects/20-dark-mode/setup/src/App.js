import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getLocalStorage = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
}

function App() {
  const [theme, setTheme] = useState(getLocalStorage());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
  }

  return <main>
    <nav>
      <div className='nav-center'>
        <h1>Overreacted</h1>
        <button className='btn' onClick={handleTheme}>Toggle</button>
      </div>
    </nav>
    <section className='articles'>
      {
        data.map((article) => {
          return <Article key={article.id} {...article} />
        })
      }
    </section>
  </main>
}

export default App
