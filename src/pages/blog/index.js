/** @format */

import React from "react";
import { Layout } from "../../layout/Layout";
import BlogList from "../../components/BlogList/BlogList";

const Blog = () => {
  return (
    <div>
      <div style={{ marginTop: "-1000px" }} />
      {/* Reduces the margin set by Layout component */}
      <Layout isBlog={true}>
        <BlogList />
      </Layout>
    </div>
  );
};

export default Blog;
