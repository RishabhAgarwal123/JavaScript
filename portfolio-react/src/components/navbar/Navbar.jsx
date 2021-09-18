import React from 'react';
import './Navbar.scss';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = ({menu, changeMenu}) => {
    return (
        <div className={menu ? "navbar active" : "navbar"}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">rishabh</a>
                    <div className="navbar__left-container">
                        <AddIcCallIcon className="icon" />
                        <span>+91 9090909090</span>
                    </div>
                    <div className="navbar__left-container">
                        <ContactMailIcon className="icon" />
                        <span>rishi@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="ham" onClick={() => changeMenu(!menu)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;
