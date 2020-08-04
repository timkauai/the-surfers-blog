import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Image from "./image";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query logoNavImg {
      logo: file(relativePath: { eq: "logo.png" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
        className="title-super-wrap"
      >
        <h1 className="title-wrap">
          <Link
            to="/"
            className="title"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            <Img
              className="title-logo"
              fluid={data.logo.childImageSharp.fluid}
            />{" "}
            <h1 className="title-text"> The Surfers Blog </h1>{" "}
          </Link>{" "}
        </h1>{" "}
      </div>{" "}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
