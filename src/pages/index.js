import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HomePage from '../components/PageComponents/Home/HomePage'

import BG from '../images/blue-red-pipewrench.jpg'

const IndexPage = () => (
  <Layout
  bgImage={BG}
  >
    <SEO title="Spartan Plumbing Services and Repairs" />
    <HomePage
     />

  </Layout>
);

export default IndexPage;
