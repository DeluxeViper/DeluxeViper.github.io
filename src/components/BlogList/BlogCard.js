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
import { BlogTags, BlogTag } from "../../styles/BlogPageStyle";
import Link from "next/link";

const BlogCard = (props) => {
  if (!props.blog.shortname) {
    return <div>Undefined shortname</div>;
  }
  return (
    <Container>
      <div style={{ cursor: "pointer" }}>
        <Link href={`/blog/${props.blog.shortname}`}>
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
              <BlogTags>
                {props.blog?.topics.map((tag, index) => (
                  <BlogTag key={`${props.blog.shortname}-tag-index-${index}`} style={{ "font-size": "12px"}}>
                    {tag}
                  </BlogTag>
                ))}
              </BlogTags>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default BlogCard;
