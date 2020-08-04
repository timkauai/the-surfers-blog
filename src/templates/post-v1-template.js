import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

import "../pages/styles/styles.scss";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    console.log("render");
  });

  const openMenu = () => {
    setBurger(!burger);
    console.log(burger);
  };
  return (
    <Layout>
      <SEO title="Home" />
      <hr className="horiz-line" />
      <div className="keywords">
        <Link to={post.frontmatter.keyword1path}>
          {" "}
          {post.frontmatter.keyword1}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword2path}>
          {" "}
          {post.frontmatter.keyword2}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword3path}>
          {" "}
          {post.frontmatter.keyword3}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword4path}>
          {" "}
          {post.frontmatter.keyword4}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword5path}>
          {" "}
          {post.frontmatter.keyword5}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword6path}>
          {" "}
          {post.frontmatter.keyword6}{" "}
        </Link>{" "}
        <button class="icon" onClick={() => openMenu()}>
          <div className="icon-burger"> </div>{" "}
        </button>{" "}
      </div>{" "}
      <div className={burger.toString()}>
        {" "}
        <Link to={post.frontmatter.keyword1path}>
          {" "}
          {post.frontmatter.keyword1}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword2path}>
          {" "}
          {post.frontmatter.keyword2}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword3path}>
          {" "}
          {post.frontmatter.keyword3}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword4path}>
          {" "}
          {post.frontmatter.keyword4}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword5path}>
          {" "}
          {post.frontmatter.keyword5}{" "}
        </Link>{" "}
        <Link to={post.frontmatter.keyword6path}>
          {" "}
          {post.frontmatter.keyword6}{" "}
        </Link>{" "}
      </div>{" "}
      <hr className="horiz-line" />
      <div className="post-above-fold">
        <h1> {post.frontmatter.title} </h1>{" "}
        <div className="line-of-info">
          <h3>
            {post.frontmatter.keywords} • {post.frontmatter.author}
          </h3>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post.html,
        }}
      ></div>{" "}
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
}

export const postQuery = graphql`
  query BlogPostByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        keywords
        author
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
      }
    }
  }
`;
