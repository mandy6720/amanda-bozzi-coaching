import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

// import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <div className="hero">
          <div className="hero-content">
            <h1 className="">Get Unstuck.</h1>
            <h4>Stop wasting your time in an unfulfilling, unsatisfying, soul-sucking job and start doing work you love.</h4>
            <button className="gold-button"><a href="https://forms.aweber.com/form/57/2063595657.htm" target="_blank">Get Started</a></button>
          </div>
        </div>
        <div className="home-content">
          <div className="divider-text">
            <h1>Let me know if any of this sounds familiar...</h1>
          </div>
          <div className="content-section">
            <ul className="no-bullet-list gold-bullet">
              <li>You feel like everybody else is moving along on their path and you are just standing still. Paralyzed.</li>
              <li>You’re doing everything you’re ‘supposed’ to do, everything you ‘should’ do and yet you’re left completely unfulfilled and unsatisfied.</li>
              <li>You remember a time when you were excited and passionate but it somehow got buried under the day to day overwhelm, the crazy schedule, or that job that - if we're being honest - isn't going anywhere.</li>
              <li>The zest you once had for life is just slowly drifting away.</li>
              <li>Let’s face it. you are S-T-U-C-K .</li>
            </ul>
          </div>
          <div className="divider-text">
            <h1>What if you want more?</h1>
          </div>
          <div className="content-section">
            <ul className="no-bullet-list gold-bullet">
              <li>You’re creative, smart, and pretty ambitious. </li>
              <li>You dreamed of so much more.</li>
              <li>You’re not quite willing to settle just yet.</li>
            </ul>
          </div>
          <div className="divider-text">
            <h1>Hi there, I'm Amanda 👋 </h1>
          </div>
          <div className="content-section">
            <ul className="no-bullet-list">
              <li>I help ambitious millennials create a professional life they love by using proven 
              techniques used by the biggest tech companies and fastest-growing startups so they can achieve their 
              goals faster.</li>
            </ul>
          </div>
          <div className="divider-text">
            <h1>🔥 Re-ignite your passion</h1>
          </div>
          <div className="content-section">
            <ul className="no-bullet-list gold-bullet">
              <li>Start creating a life you're passionate about.</li>
              <li>Find your perfect side hustle with this <a href="https://forms.aweber.com/form/57/2063595657.htm" target="_blank">free workbook</a> (or test your current business idea against it)</li>
            </ul>
          </div>
          <img src="../../static/img/newhome.jpg" alt=""/>
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
