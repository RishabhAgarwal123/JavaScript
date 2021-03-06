import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempBtn = event.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom });
  }

  const handleSubmenu = (event) => {
    if (!event.target.classList.contains('link-btn')) {
      closeSubMenu();
    }
  }

  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='logo' />
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Products</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Developers</button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>Company</button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
}

export default Navbar
