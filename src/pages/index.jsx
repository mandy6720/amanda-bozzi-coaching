import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import './index.css';

class Index extends React.Component {
  render() {
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    // return (
    //   <div className="index-container">
    //     <Helmet title={config.siteTitle} />
    //     <SEO postEdges={postEdges} />
    //     <PostListing postEdges={postEdges} />
    //   </div>
    // );
    return <div className="under-construction">
      <h1 className="under-construction-text">Under Construction - Please Come Back Soon!</h1>
      </div>
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
