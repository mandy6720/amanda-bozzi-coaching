import React from 'react';
import Link from 'gatsby-link';

import Hamburger from '../Hamburger/hamburger';

import './navBar.css';

const ListLink = props =>
  <li className="nav-link">
    <Link to={props.to}>
      {props.children}
    </Link>
</li>

export default ({ children }) =>
  <header id="navbar-container">
    <Link to="/" id="brand-logo">
      <h3>Amanda Bozzi</h3>
    </Link>
    <ul id="nav-links">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    <Hamburger />
  </header>
