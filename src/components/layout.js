/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css'
import Header from "./header";
import LazyHero from 'react-lazy-hero'

const Layout = ({ children }, props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>

      <Header siteTitle={data.site.siteMetadata.title} />
      <main >
        {children}
      </main>
      <footer className="" style={{display: 'none'}}>

      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
