/** @format */

import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import BlogCard from "./BlogCard";
import { blogs } from "../../constants/blog_constants";

const BlogList = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Blog</SectionTitle>
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </Section>
  );
};

export default BlogList;
