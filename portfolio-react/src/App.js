import Navbar from './components/navbar/Navbar';
import Introduction from './components/Introduction/Introduction';
import Work from './components/Works/Work';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import './App.scss';
import { useState } from 'react';

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="app">
      <Navbar menu={openMenu} changeMenu={setOpenMenu} />
      <Menu menu={openMenu} changeMenu={setOpenMenu} />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
