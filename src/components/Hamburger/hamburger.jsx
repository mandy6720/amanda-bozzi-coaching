import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

import './hamburger.css';

const animate = (e) => {
  let menu = document.getElementById('hb-container');
  menu.classList.toggle("change");
  // show links
  menu.classList.toggle("active");

  /* Toggle between hiding and showing the active panel */
  let panels = document.getElementsByClassName('panel-link');
  _.forEach(panels, element => {
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
    if (element.style.maxHeight){
      element.style.maxHeight = null;
    } else {
      element.style.maxHeight = element.scrollHeight + "px";
    } 
  });
}

export default ({ children }) =>
  <div id="hb-container" onClick={animate.bind(this)}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
