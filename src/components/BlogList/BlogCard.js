/** @format */

import React from "react";
import {
  Container,
  BlogDate,
  BlogTitle,
  BlogText,
  ReadMoreBtn,
  BlogImgWrapper,
} from "./BlogCardStyle";
import Link from "next/link";

const BlogCard = (props) => {
  if (!props.blog.shortname) {
    return <div>Undefined shortname</div>;
  }
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BlogImgWrapper>
          <img
            alt=""
            src={props.blog.image}
            style={{ objectFit: "contain", height: "200px", width: "200px" }}
          />
        </BlogImgWrapper>
        <div>
          <BlogDate>{props.blog.date_posted}</BlogDate>
          <BlogTitle>{props.blog.title}</BlogTitle>
          {/* <BlogText>{props.blog.short_description}</BlogText> */}
          <ReadMoreBtn>
            <Link href={`/blog/${props.blog.shortname}`}>READ MORE</Link>
          </ReadMoreBtn>
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
