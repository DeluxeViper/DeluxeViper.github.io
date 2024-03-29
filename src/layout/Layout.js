/** @format */

import { React, useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BlogHeader from "../components/Header/BlogHeader";
import { Container } from "./LayoutStyles";

export const Layout = ({ children, isBlog }) => {
  const [themeType, setThemeType] = useState("light");

  return (
    <Container>
      {isBlog ? (
        <BlogHeader
          themeType={themeType}
          setThemeType={setThemeType}
        ></BlogHeader>
      ) : (
        <Header themeType={themeType} setThemeType={setThemeType} />
      )}
      <main style={{ marginTop: !isBlog ? "120px" : "0px" }}>{children}</main>
      <Footer style={{}} />
    </Container>
  );
};
