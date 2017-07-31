import React from 'react';
import { Link } from 'react-router-dom';
import './css//Nav.css';

const Nav = () => (
    <div id="nav">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </div>
);

export default Nav;