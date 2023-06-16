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

const BlogCard = () => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BlogImgWrapper>
          <img
            alt=""
            src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
          />
        </BlogImgWrapper>
        <div>
          <BlogDate>Date Posted</BlogDate>
          <BlogTitle>Blog Title</BlogTitle>
          <BlogText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </BlogText>
          <ReadMoreBtn>READ MORE</ReadMoreBtn>
        </div>
      </div>
    </Container>
  );
};

export default BlogCard;
