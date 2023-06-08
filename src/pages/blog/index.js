/** @format */

import React, { useState } from "react";
import { Layout } from "../../layout/Layout";
import Theme from "../../styles/theme";
import BlogList from "../../components/BlogList/BlogList";

const Blog = () => {
  const [themeType, setThemeType] = useState("light");

  return (
    <Theme themeType={themeType}>
      <Layout isBlog={true}>
        <BlogList />
      </Layout>
    </Theme>
  );
};

export default Blog;
