import React from 'react';
import Link from 'gatsby-link';

import './hamburger.css';

const animate = (e) => {
  let menu = document.getElementById('hb-container');
  menu.classList.toggle("change");
}

export default ({ children }) =>
  <div id="hb-container" onClick={animate.bind(this)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
