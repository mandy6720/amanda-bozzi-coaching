import React from 'react';
import Link from 'gatsby-link';

import './navBar.css';

let screenSize = document.getElementsByTagName('body')[0].clientWidth;
console.log(screenSize)

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
    {screenSize >= 375 ? (<ul id="nav-links">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>) : <div className="hamburger">hb</div>
    }
  </header>
