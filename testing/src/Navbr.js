import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbr extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
