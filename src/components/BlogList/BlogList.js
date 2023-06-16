/** @format */

import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <Section>
      <SectionDivider />
      <br />
      <SectionTitle>Blog</SectionTitle>
      <BlogCard shortname={"random"}></BlogCard>
      <BlogCard></BlogCard>
      <BlogCard></BlogCard>
    </Section>
  );
};

export default BlogList;
