import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from '../components/Footer/Footer';

class Contact extends Component {
  render() {
    return (
      <div className="container">
      <Helmet title={`Contact Me | ${config.siteTitle}`} />
        <div className="hero wwm-hero">
          <div className="hero-content wwm-content">
            <h1>📱 Contact me</h1>
          </div>
        </div>
        <div className="divider-text">
        </div>
        <div className="content-section center-text">
          <span>Got questions?</span>
          <div class="contact-form">
            <form action="http://formspree.io/amanda@amandabozzi.com" method="POST">
              <div class="single">
                <input type="text" name="name" class="controler" placeholder="Enter your full name" required="" />
              </div>
              <div class="single">
                <input type="email" name="email" class="controler" placeholder="Enter your email" required="" />
              </div>
              <div class="single">
                <textarea name="textarea" id="message" cols="25" rows="10" placeholder="How I can help you? :)"></textarea>
              </div>
              <div class="form-submit">
                <input type="submit" name="comment-sub" value="Send" />
              </div>
            </form>
            <br/><br/>
          </div>
        </div>
        
        <Footer config={config} />
      </div>
    )
  }
};

export default Contact;
