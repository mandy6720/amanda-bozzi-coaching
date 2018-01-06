import React from 'react';
import Link from 'gatsby-link';

import './AccordianLinks.css';

const accClose = () => {
  const acc = document.getElementById("hb-container");
  acc.classList.toggle("change");
  acc.classList.toggle("active");
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

const ListLink = props =>
  <Link to={props.to} className="hb-link" onClick={accClose}>
    {props.children}
  </Link>

export default ({ children }) =>
  <div id="accordian-links">
    <div className="panel-link">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </div>
  </div>


