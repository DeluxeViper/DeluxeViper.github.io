/** @format */
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import HamburgerIcon from "./HamburgerIcon";
import {
  Menu,
  MenuButton,
  MenuPopover,
  MenuItem,
  MenuItems,
} from "@reach/menu-button";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ThemeDiv,
  HeaderItem,
  LinksDiv,
  P,
  SmallHeaderContainer,
  MotionDiv,
  ThemeText,
} from "./HeaderStyles";
import { ThemeContext } from "./../../styles/theme";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./HeaderStyle.module.css";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const shouldReduceMotion = useReducedMotion();

  const getDarkModeToggle = () => (
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
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "5px",
          }}
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
  );

  return (
    <div>
      <SmallHeaderContainer>
        <Div1 style={{ width: "100%" }}>
          <Link
            href="#"
            className={styles.link_name}
            style={{ display: "flex" }}
          >
            <a
              style={{
                display: "flex",
                "align-items": "center",
                "white-space": "nowrap",
              }}
            >
              <ThemeDiv>
                <DiCssdeck size="4rem" />
                {/* <img
                  src="/images/portfolioImage.jpg"
                  height="4rem"
                  width="4rem"
                ></img> */}
              </ThemeDiv>
              <P>Abdullah Mohamed</P>
            </a>
          </Link>
        </Div1>
        <Menu>
          {({ isExpanded }) => {
            useEffect(() => {
              if (isExpanded) {
                // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
                document.body.classList.add("fixed");
                document.body.classList.add("overflow-y-scroll");
                document.body.style.overflowY = "hidden";
                // alternatively, get bounding box of the menu, and set body height to that.
                document.body.style.height = "100vh";
              } else {
                document.body.classList.remove("fixed");
                document.body.classList.remove("overflow-y-scroll");
                document.body.style.removeProperty("height");
                document.body.style.removeProperty("overflow-y");
              }
            }, [isExpanded]);
            const state = isExpanded ? "open" : "closed";

            return (
              <div>
                <MenuButton
                  style={{
                    border: "none",
                    margin: "25px",
                  }}
                >
                  <HamburgerIcon opened={isExpanded} />
                </MenuButton>
                <AnimatePresence>
                  <MenuPopover style={{ outline: "none" }}>
                    <MotionDiv
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{
                        ease: "linear",
                        duration: shouldReduceMotion ? 0 : 0.15,
                      }}
                    >
                      <ThemeText>
                        <MenuItems
                          style={{
                            height: "100%",
                            width: "100%",
                            outline: "none",
                          }}
                        >
                          <Link href="#work">
                            <MenuItem className={styles.menu_item}>
                              Work
                            </MenuItem>
                          </Link>
                          <Link href="#projects">
                            <MenuItem className={styles.menu_item}>
                              Projects
                            </MenuItem>
                          </Link>
                          <Link href="#tech">
                            <MenuItem className={styles.menu_item}>
                              Technologies
                            </MenuItem>
                          </Link>
                          <Link href="#about">
                            <MenuItem className={styles.menu_item}>
                              About
                            </MenuItem>
                          </Link>
                          <MenuItem
                            className={`${styles.menu_item} ${styles.no_border}`}
                          >
                            {getDarkModeToggle()}
                          </MenuItem>
                        </MenuItems>
                      </ThemeText>
                    </MotionDiv>
                  </MenuPopover>
                </AnimatePresence>
              </div>
            );
          }}
        </Menu>
      </SmallHeaderContainer>
      <Container>
        <Div1>
          <Link className={styles.link_name} href="#">
            <a
              style={{
                display: "flex",
                "align-items": "center",
              }}
            >
              <ThemeDiv>
                <DiCssdeck size="5rem" />
                {/* If you want a portfolio image as the icon uncomment this */}
                {/* <img
                  src="/images/portfolioImage.png"
                  style={{
                    width: "70%",
                    transform: "scale(1.25)",
                  }}
                ></img> */}
              </ThemeDiv>
              <P>Abdullah Mohamed</P>
            </a>
          </Link>
        </Div1>
        <LinksDiv>
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
              {getDarkModeToggle()}
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
        </LinksDiv>
      </Container>
    </div>
  );
};

export default Header;
