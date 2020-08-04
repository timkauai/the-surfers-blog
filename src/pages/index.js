import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import "./styles/styles.scss";

const IndexPage = ({ data }) => {
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    console.log("render");
  });

  const openMenu = () => {
    setBurger(!burger);
    console.log(burger);
  };

  const dt = data.keys.nodes[0].frontmatter;

  return (
    <Layout>
      <SEO title="Home" />
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
      </div>{" "}
      <div className="latest-posts">
        <h3 className="latest-title"> latest posts </h3>{" "}
        <div className="line-of-3">
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1>{dt.latestpost1.title}</h1> <h3> {dt.latestpost1.keywords} </h3>{" "}
            <Link to={dt.latestpost1.path}> Read More </Link>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1>{dt.latestpost2.title} </h1> <h3>{dt.latestpost2.keywords}</h3>{" "}
            <Link to={dt.latestpost2.path}> Read More </Link>{" "}
          </div>{" "}
          <div className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgtwo.childImageSharp.fluid}
            />{" "}
            <h1> {dt.latestpost3.title} </h1> <h3>{dt.latestpost3.keywords}</h3>{" "}
            <Link to={dt.latestpost3.path}> Read More </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="socials-banner">
        <div>
          <h3> go check us out </h3>{" "}
          <div className="social-icons">
            <a href="https://instagram.com/thesurfersblog">
              <div className="superman"> </div>{" "}
            </a>{" "}
            <div> </div> <div> </div> <div> </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="margin-top">
        <h3 className="latest-title"> {dt.featuredkeyword.title} </h3>{" "}
        <div className="large">
          {" "}
          <div className="featured-large-img"> </div>{" "}
          <div className="large-padding">
            <div className="titleing">
              <h1> {dt.featuredkeyword.large.title} </h1>{" "}
              <h3> {dt.featuredkeyword.large.keywords} </h3>{" "}
            </div>
            <p>{dt.featuredkeyword.large.desc}</p>{" "}
            <Link to={dt.featuredkeyword.large.path}> Read More </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="line-of-3">
          <Link className="latest-article" to={dt.featuredkeyword.sm1.path}>
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1 className="a-that-shouldnt-be">
              {" "}
              {dt.featuredkeyword.sm1.title}{" "}
            </h1>{" "}
          </Link>{" "}
          <Link className="latest-article" to={dt.featuredkeyword.sm2.path}>
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1 className="a-that-shouldnt-be">
              {" "}
              {dt.featuredkeyword.sm2.title}{" "}
            </h1>{" "}
          </Link>{" "}
          <Link to={dt.featuredkeyword.sm3.path} className="latest-article">
            <Img
              className="latest-img"
              fluid={data.imgthree.childImageSharp.fluid}
            />{" "}
            <h1 className="a-that-shouldnt-be">
              {" "}
              {dt.featuredkeyword.sm3.title}{" "}
            </h1>{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
      <div> </div> <div class="img"> </div> <div> </div>{" "}
      <div>
        <h3 className="centered margin-top"> editors choice </h3>{" "}
        <div className="large">
          <div className="featured-large-img"> </div>{" "}
          <div className="large-padding">
            <div className="titleing">
              <h1> {dt.editorschoice1.title} </h1>{" "}
              <h3> {dt.editorschoice1.keywords} </h3>{" "}
            </div>{" "}
            <p>{dt.editorschoice1.desc}</p>{" "}
            <Link to={dt.editorschoice1.path}> Read More </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          <div className="large">
            <div className="featured-large-img"> </div>{" "}
            <div className="large-padding">
              <div className="titleing">
                <h1> {dt.editorschoice2.title} </h1>{" "}
                <h3> {dt.editorschoice2.keyword2} </h3>{" "}
              </div>{" "}
              <p>{dt.editorschoice2.desc}</p>{" "}
              <Link to={dt.editorschoice2.path}> read </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <h3 className="centered"> popular posts </h3>{" "}
      <div style={{ marginBottom: "10vh" }} className="line-of-3">
        <div className="sm">
          {" "}
          <div className="div-sm-img"> </div>{" "}
          <h1> {data.keys.nodes[0].frontmatter.poppost1.title} </h1>{" "}
          <h3> {dt.poppost1.keywords} </h3>{" "}
          <Link to={dt.poppost1.path}> read more </Link>{" "}
        </div>{" "}
        <div className="sm">
          {" "}
          <div className="div-sm-img"> </div>{" "}
          <h1> {data.keys.nodes[0].frontmatter.poppost2.title} </h1>{" "}
          <h3> {dt.poppost2.keywords} </h3>{" "}
          <Link to={dt.poppost2.path}> read more </Link>{" "}
        </div>{" "}
        <div className="sm">
          {" "}
          <div className="div-sm-img"> </div>{" "}
          <h1> {data.keys.nodes[0].frontmatter.poppost3.title} </h1>{" "}
          <h3> {dt.poppost3.keywords} </h3>{" "}
          <Link to={dt.poppost3.path}> read more </Link>{" "}
        </div>{" "}
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

export default IndexPage;

export const data = graphql`
  query ImagesAndMarkdown {
    imgthree: file(relativePath: { eq: "Surf-3.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    imgtwo: file(relativePath: { eq: "Surf-21.jpg" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    keys: allMarkdownRemark(
      filter: { frontmatter: { post: { eq: "false" } } }
    ) {
      nodes {
        frontmatter {
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
          editorschoice1 {
            title
            path
            keywords
            desc
          }
          editorschoice2 {
            title
            path
            keywords
            desc
          }
          poppost1 {
            title
            path
            keywords
          }
          poppost2 {
            title
            path
            keywords
          }
          poppost3 {
            title
            path
            keywords
          }
          large1 {
            title
            path
            keywords
            desc
          }
          latestpost1 {
            title
            path
            keywords
          }
          latestpost2 {
            title
            path
            keywords
          }
          latestpost3 {
            title
            path
            keywords
          }
          featuredkeyword {
            title
            large {
              title
              path
              keywords
              desc
            }
            sm1 {
              title
              path
            }
            sm2 {
              title
              path
            }
            sm3 {
              title
              path
            }
          }
        }
      }
    }
  }
`;
