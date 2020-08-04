import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Img from "gatsby-image";

import "../styles/styles.scss";

const PGAGolfTalk = ({ data }) => {
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    console.log("render");
  });

  const openMenu = () => {
    setBurger(!burger);
    console.log(burger);
  };

  const dt = data.allMarkdownRemark.nodes[0].frontmatter;

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="centered"> Catagory: PGA Golf Talk </h1>{" "}
      <hr className="horiz-line" />
      <div className="keywords">
        <Link to={dt.keyword1path}> {dt.keyword1} </Link>{" "}
        <Link to={dt.keyword2path}> {dt.keyword2} </Link>{" "}
        <Link to={dt.keyword3path}> {dt.keyword3} </Link>{" "}
        <Link to={dt.keyword4path}> {dt.keyword4} </Link>{" "}
        <Link to={dt.keyword5path}> {dt.keyword5} </Link>{" "}
        <Link to={dt.keyword6path}> {dt.keyword6} </Link>{" "}
        <button class="icon" onClick={() => openMenu()}>
          <div className="icon-burger"> </div>{" "}
        </button>{" "}
      </div>{" "}
      <div className={burger.toString()}>
        {" "}
        <Link to={dt.keyword1path}> {dt.keyword1} </Link>{" "}
        <Link to={dt.keyword2path}> {dt.keyword2} </Link>{" "}
        <Link to={dt.keyword3path}> {dt.keyword3} </Link>{" "}
        <Link to={dt.keyword4path}> {dt.keyword4} </Link>{" "}
        <Link to={dt.keyword5path}> {dt.keyword5} </Link>{" "}
        <Link to={dt.keyword6path}> {dt.keyword6} </Link>{" "}
      </div>{" "}
      <hr className="horiz-line" />
      <div className="large above-fold">
        <div className="featured-large-img"> </div>{" "}
        <div className="large-padding">
          <div className="titleing">
            <h1 className="article-title"> {dt.large1.title} </h1>{" "}
            <h3> {dt.large1.keywords}</h3>{" "}
          </div>{" "}
          <p>{dt.large1.desc}</p> <Link to={dt.large1.path}> Read More </Link>{" "}
        </div>{" "}
      </div>
      <h3>
        {" "}
        We are sorry, but our writers have not produced any content on Golf
        Courses quite yet, look forward to some soon!!
      </h3>{" "}
      <div className="out-of-content">
        <h3>
          Feel free to either{" "}
          <Link className="return-home" to="/">
            Return Home{" "}
          </Link>
          Or check us out on social media(with the links below) !
        </h3>{" "}
      </div>{" "}
      <footer>
        <div className="footer-links left">
          <Link to="https://reddit.com"> reddit </Link> <Link> youtube </Link>{" "}
          <Link> pintrest </Link> <Link> insta </Link>{" "}
        </div>{" "}
        <div className="footer-links right">
          <Link> contact </Link> <Link> feedback </Link>{" "}
        </div>{" "}
      </footer>{" "}
    </Layout>
  );
};

export default PGAGolfTalk;

export const PGAGolfTalkQuery = graphql`
  query PGAGolfTalk {
    allMarkdownRemark(
      filter: { frontmatter: { keyword: { eq: "PGA Golf Talk" } } }
    ) {
      nodes {
        frontmatter {
          keyword
          keyword1
          keyword1path
          keyword2
          keyword2path
          keyword3
          keyword3path
          keyword4
          keyword4path
          keyword5
          keyword5path
          keyword6
          keyword6path
          large1 {
            title
            path
            keywords
            desc
          }
        }
      }
    }
  }
`;
