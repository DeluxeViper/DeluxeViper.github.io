/** @format */

import Link from "next/link";
import React, { useContext } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ThemeDiv,
  HeaderItem,
} from "./HeaderStyles";
import { ThemeContext } from "./../../styles/theme";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <Container>
      <Div1>
        <Link href="#">
          <a
            styles={{
              display: "flex",
              "align-items": "center",
            }}
          >
            <ThemeDiv>
              <DiCssdeck size="3rem" />
            </ThemeDiv>
            <Span>Abdullah Mohamed</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <HeaderItem>
          <Link href="#work">
            <NavLink>Work</NavLink>
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </HeaderItem>
        <HeaderItem style={{ position: "relative", top: "-10px" }}>
          <div style={{ marginLeft: "48px" }}>
            <input
              className="toggle"
              type="checkbox"
              id="toggle"
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <label
              className="toggle_label"
              for="toggle"
              style={{ position: "relative" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={theme === "dark" ? "white" : "black"}
                height="2rem"
                width="2rem"
                style={{ position: "absolute", top: "0.5rem", left: "5px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke={theme === "dark" ? "white" : "black"}
                height="2rem"
                width="2rem"
                style={{ position: "absolute", top: "0.5rem", right: "5px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </label>
          </div>
        </HeaderItem>
      </Div2>
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
    </Container>
  );
};

export default Header;
