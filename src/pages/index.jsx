import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import UnderConstruction from "../components/UnderConstruction/UnderConstruction";

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
            <button className="gold-button">Get Started</button>
          </div>
        </div>
      </div>
    );
    // return <div>
    //   <UnderConstruction/>
    // </div>
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
