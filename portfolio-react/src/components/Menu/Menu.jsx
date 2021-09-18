import React from 'react';
import './Menu.scss';

const Menu = ({menu, changeMenu}) => {
    return (
        <div className={"menu " + (menu && "active")}>
            <ul>
                <li onClick={() => changeMenu(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => changeMenu(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => changeMenu(false)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={() => changeMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
