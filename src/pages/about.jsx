import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from '../components/Footer/Footer';

class AboutPage extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <div className="hero about-hero">
          <div className="hero-content about-content">
            <div className="portrait" alt="photo of amanda"></div>
            <h1>Hi there!<br/>I'm Amanda</h1>
          </div>
        </div>
        <div className="divider-text">
          <h1>What's my deal?</h1>
        </div>
        <div className="content-section  gold-bullet">
          <ul>
            <li>I help millennial entrepreneurs (and wantrepreneurs) achieve their BIGGEST business 
            goals quicker by using <u>PROVEN</u> techniques that I *borrowed* from the top tech companies 
            and fastest growing startups.</li>
            <li>This allows my clients to see up to double the results in half the time that they would using a traditional approach</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>Let me know if any of this hits close to home:</h1>
        </div>
        <div className="content-section gold-bullet">
          <ul>
            <li>Maybe you feel overwhelmed or stuck.</li>
            <li>Maybe you hate your job, or just feel uncertain about where you are in life.</li>
            <li>Maybe you're starting to realize that life after college isn't all what you expected; working full time isn't what you expected.</li>
            <li>Maybe the friends you've had for years and years are changing and you just kind of felt lost in life.</li>
            <li>Maybe if you see one more of your friends or cousins or former classmates on Facebook flaunting their new business/marriage/whatever you might actually LOSE IT.</li>
            <li>Maybe you want something more.</li>
            <li>Basically, if you're sick of letting life just happen to you and serious about getting the life you want, I can help.</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>Here's my story...</h1>
        </div>
        <div className="content-section center-text">
          <span>I get it. I've been there (and not too long ago).</span>
          <span>I used to be stuck big time.</span>
          <span>I graduated college in 2009 - in the middle of the recession - with a basic psych/art degree and exactly zero idea of what I wanted to do. </span>
          <span>Like so many other millennials, I took the first job I could find and then spent years drifting from one crappy job to the next. </span>
          <span>I had no clear purpose but knew I was meant for something more than the unfulfilling, soul-sucking routine I was stuck in.</span>
          <span>But I was able to figure it out.</span>
          <span>One day I saw a story on the news about coding bootcamps - programs that take people with no prior experience and get them to a point where they can get a job as a junior programmer in usually about 3 months. It cost about half my salary at the time but I ponied up the (absolutely terrifying amount of) cash and went through the program.</span>
          <span>Why does that matter?</span>
          <span>Well, working in tech, I learned about this project management technique that's used by all the top companies (think Google, LinkedIn, Twitter, etc) and the fastest growing startups. </span>
          <span>It's a technique that has been PROVEN to get as much as <u>twice</u> the results in half the time.</span>
          <span>One day, I had the thought, "what if I applied this to my personal goals?"</span>
          <span>Then, when i had to plan a wedding, close on a house and move in the same month, I decided to test my idea.</span>
          <span>It worked crazy well., and I've been able to apply it since then to help lots of people achieve their biggest business goals in <u>way</u> less time than it would traditionally take.</span>
          <span>And the best part?</span>
          <span>I know how frustrating it is to be stuck and feel like you're paralyzed as you watch life pass you by.</span>
          <span>That's why it's so rewarding to get to help people in exactly that situation and watch as they push past it and acheive INCREDIBLE things.</span>
        </div>
        <div className="divider-text">
          <h1>Some fun facts</h1>
        </div>
        <div className="content-section gold-bullet">
          <span>Here are some of my weirdest jobs:</span><span>(while I was still figuring out my life)</span>
          <ul>
            <li>Receptionist/office manager at a cemetery (yeah, I know)</li>
            <li>Cocktail waitress at a *ahem* gentlemen's club</li>
            <li>One temp job where I got to build the world's largest erector set toy (which was actually pretty cool)</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>Ready to start making shit happen?</h1>
        </div>
        <div className="content-section">
          <span><a href="http://bit.ly/call-with-amanda-bozzi" target="_blank">Click here</a> to schedule a discovery call, where we can find out how I can help you to live a life you LOVE 
            (and can totally brag about on Facebook)</span>
        </div>
        <Footer config={config} />
      </div>
    );
  }
}

export default AboutPage;
