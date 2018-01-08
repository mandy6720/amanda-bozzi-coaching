import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Footer from '../components/Footer/Footer';

class WorkWithMePage extends Component {
  render() {
    return (
      <div className="container">
      <Helmet title={`About | ${config.siteTitle}`} />
        <div className="hero wwm-hero">
          <div className="hero-content wwm-content">
            <h1>Stop letting life pass you by!</h1>
          </div>
        </div>
        <div className="divider-text">
          <h1>Imagine this...</h1>
        </div>
        <div className="content-section center-text">
          <span>It's Monday morning, but you wake up with a sleepy smile.</span>
          <span>You roll over and get out of bed but you aren't in a rush. </span>
          <span>Maybe you go out to that new coffee shop you've been meaning to check out and grab some breakfast.</span>
          <span>Maybe you take your laptop and maybe you don't.</span>
          <span>It's all up to you because you own your own business and the workday starts (and ends) when say it does because, well, you're the boss. </span>
          <span>Sounds pretty good right?</span>
          <span>The amazing thing is that this (or whatever your version of a dream morning is) is available to you (even on a Monday).</span>
          <span>And it's <u>so</u> much closer than you think! </span>
          <span>I've been where you are before and I figured out how to get to the other side (and helped others do the same)</span>
          <span>I used to dread waking up on Mondays (and all weekdays for that matter) and rushing to a job that I wasn't exactly thrilled to be doing in the first place.</span> 
          <span>I remember what it's like and it was <u>NOT</u> fun.</span>
        </div>
        <div className="divider-text">
          <h1>That’s why I created my business coaching program </h1>
        </div>
        <div className="content-section center-text">
          <span>I wanted to help the creative and ambitious (but maybe a little bit stuck) go from drifting through life without a purpose to living a life they love (and the one they <u>DESERVE</u> if we're being honest here).</span>
          <span>I wanted to take their professional lives from 😬 to 😎</span>
          <span>I wanted to take everything I've learned over the past few years about personal development and combine it with the best project management techniques borrowed from the tech field (you know, the ones companies like Google and AirBnB use to zoom past the competition and acheive INSANE things quicker than anyone thought was possible) to turbo charge your transformation so you don't have to waste a minute longer than you have to in a life you aren't thrilled with.</span>
          <span>It's like business coaching on rocket fuel 🚀</span>
        </div>
        <div className="divider-text">
          <h1>Here's what you get when you work with me</h1>
        </div>
        <div className="content-section gold-bullet">
          <ul>
            <li>You will get a FULLY CUSTOMIZED, step-by-step success blueprint to take you from point A (where you are now) to point B (livin' the dream 😎)</li>
            <li>You will get tons of support and a short feedback loop (daily check-ins and unlimited email) - way more than other coaching programs (which average only one call every two weeks)</li>
            <li>We'll have fun! - I have found that it's much easier to do hard work when you're having a good time and laughing along the way so that's how I run my program</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>My support will be personalized to fit your goals</h1>
        </div>
        <div className="content-section gold-bullet">
          <ul>
            <li>Want to start your own business? <br/>I can help you make it a reality!</li>
            <li>Want to switch careers or upgrade your current job? <br/>Let's make it happen!</li>
            <li>Something else business-y? <br/>Let's chat!</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>How? Here's the month-by-month breakdown</h1>
        </div>
        <div className="content-section gold-bullet">
          <h1>- Month 1 -</h1>
          <ul>
            <li>We start with a 1-2 hour planning call:</li>
            <ul className="sub-list">
              <li>We break down your goal into small, actionable steps</li>
              <li>We set a plan for what you're going to accomplish in the next two week "sprint"</li>
              <li>I will set you up with some of my favorite planning and project management tools (don't worry, they're my faves because they're easy)</li>
              <li>We pick a time and method (call, text, email - your call) for me to check in with you (~5-10 mins everyday)</li>
            </ul>
            <li>After two weeks, we review your progress and set up the next sprint (1 hour call)</li>
            <ul className="sub-list">
              <li>This is where we talk about what went wrong, what went right and how you're feeling in general</li>
              <li>We will continue to have our 5-10 minute daily check-ins</li>
              <li>You'll have unlimited email support from me</li>
            </ul>
          </ul>
          <h1>- Month 2 -</h1>
          <ul>
            <li>At this point, you'll have:</li>
            <ul className="sub-list">
              <li>Increased confidence from clear progress towards your goal</li>
              <li>an understanding of your "blockers" and strategies for how to handle them</li>
              <li>A bettter idea of how much you can reasonably handle at once and how to break up a goal</li>
            </ul>
            <li>We will continue our 1 hour bi-weekly "sprint review" strategy calls</li>
            <li>I will continue to check in with you each day (5-10 minutes)</li>
            <li>Unlimited email support</li>
          </ul>
          <h1>- Month 3 -</h1>
          <ul>
            <li>Very similar to the second month</li>
            <ul className="sub-list">
              <li>Bi-weekly "sprint" review and strategizing calls (1 hour)</li>
              <li>Continued daily check-ins (5-10mins)</li>
              <li>Unlimited email support</li>
            </ul>
            <li>At the end of the last "sprint", you will have:</li>
            <ul className="sub-list">
              <li>A clear picture of where they are and where they came from.</li>
              <li>More confidence (because duh! you'll be crushing it!)</li>
              <li>Great planning strategies in place</li>
            </ul>
            <li>At this point, we discuss where to go next</li>
            <ul className="sub-list">
              <li>Do you still need support?</li>
              <li>Do you have a new goal?</li>
            </ul>
          </ul>
        </div>
        <div className="divider-text">
          <h1>So what's next?</h1>
        </div>
        <div className="content-section center-text">
          <span>
            If you're ready do the work to take your life from meh to magnificent, take the next step and
            <a href="http://bit.ly/call-with-amanda-bozzi" target="_blank"> schedule a free discovery call</a> with me to see how I can help!
          </span>
        </div>
        <div className="divider-text">
          <h1>What you’ll get when you work with me</h1>
        </div>
        <div className="content-section gold-bullet">
          <ul>
            <li>One setup call, where we:</li>
              <ul>
                <li>define your goal</li>
                <li>make an actionable plan (break it down into smaller steps)</li>
                <li>create our first 2 week "sprint" (a period where you accomplish a defined set of the smaller steps from above)</li>
              </ul>
            <li>daily check-ins to keep you accountable and address any blockers</li>
            <li>unlimited email support</li>
            <li>A trello board for keeping track of your progress</li>
            <li>Five bi-weekly review and planning sessions ("sprint reviews") - 1 hour each</li>
          </ul>
        </div>
        <div className="divider-text">
          <h1>Testimonials</h1>
        </div>
        <div className="content-section center-text gold-bullet">
          {/* Andrew's Testimonial */}
          <span>"Through working with Amanda, I was able to transition into my dream career and get a $30k raise in the process! Not too shabby for a just few months of work..."<br/>- Andrew B. </span>
          <span>"Working with Amanda was an incredible experience. She not only helped me get unstuck and start a business I love, but she helped me do it all quicker than I thought was possible! Do yourself a favor and get her on the phone ASAP" <br/>- Jamie K.</span>
          <span>"Her positive attitude and real approach made working with her easy, fun and invaluable" - Bekkah H.</span>
        </div>
        <div className="divider-text">
          <h1>This seems like a big investment... Is it worth it?</h1>
        </div>
        <div className="content-section center-text gold-bullet">
          <span>That's a question only you can answer.</span>
          <span>You have to ask yourself if it's worth the price to get from where you currently are to where you want to be in the next three months.</span>
          <span>I get it, investing in yourself is always scary. But if you think about it, betting on yourself is the surest bet you can make (because you control what you do)!</span>
          <span>"Never forget, there are no guarantees. The safest bet you can make is on yourself — on your endless ability to learn and grow and contribute your special gifts to the world." <br/>- Marie Forleo</span>
        </div>
        <div className="divider-text">
          <h1>Still unsure?</h1>
        </div>
        <div className="content-section center-text">
          <span>
            <a href="http://bit.ly/call-with-amanda-bozzi">Book a free call</a> with me and we can discuss if my program is a good fit in helping you reach your goals</span>
        </div>
        <div className="divider-text">
          <h1>Why now?</h1>
        </div>
        <div className="content-section center-text">
          <span>There's an ancient Chinese proverb I love that goes "The best time to plant a tree was 20 years ago; The second best time is today".</span>
          <span>So ask yourself, what's it costing you to not take action towards your dreams and stay where you are?</span>
          <span className="urgent-text">***NOTICE***</span>
          <span>I am committed to giving specialized attention to each of my clients, and due to increasing demand I will have to raise my price soon.</span>
          <span>As such, I only have <u className="urgent-text">4</u> spots still open at the current rate.</span>
          <span><a href="http://bit.ly/call-with-amanda-bozzi">Book a call</a> with me to explore whether one of those spots could be yours</span>
        </div>
        <Footer config={config} />
      </div>
    )
  }
};

export default WorkWithMePage;
