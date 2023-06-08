/** @format */

import React from "react";
import { DiCssdeck } from "react-icons/di";
import {
  Div1,
  Div3,
  SocialIcons,
  ThemeDiv,
  P,
  BlogHeaderContainer,
  BlogLinksDiv,
} from "./HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import styles from "./HeaderStyle.module.css";

const BlogHeader = () => {
  return (
    <BlogHeaderContainer>
      <div
        style={{
          maxWidth: "1040px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Div1>
          <Link className={styles.link_name} href="/">
            <a
              style={{
                display: "flex",
                "align-items": "center",
              }}
            >
              <ThemeDiv>
                <DiCssdeck size="5rem" />
              </ThemeDiv>
              <P>Abdullah Mohamed</P>
            </a>
          </Link>
        </Div1>
        <BlogLinksDiv>
          <Div3>
            <SocialIcons target="_blank" href="https://github.com/DeluxeViper">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              target="_blank"
              href="https://linkedin.com/in/abdullah-mohamed"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </Div3>
        </BlogLinksDiv>
      </div>
    </BlogHeaderContainer>
  );
};

export default BlogHeader;
