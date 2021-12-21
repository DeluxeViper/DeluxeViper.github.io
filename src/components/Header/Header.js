/** @format */

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import HamburgerIcon from "./HamburgerIcon";
import {
  Menu,
  MenuButton,
  MenuPopover,
  MenuItem,
  MenuItems,
  MenuLink,
  useMenuButtonContext,
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
} from "./HeaderStyles";
import { ThemeContext } from "./../../styles/theme";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./HeaderStyle.module.css";

const Header = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {}, []);

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
        <Div1 styles={{ width: "100%" }}>
          <Link href="#" className={styles.link_name}>
            <a
              styles={{
                display: "flex",
                "align-items": "center",
                "white-space": "nowrap",
              }}
            >
              <ThemeDiv>
                <DiCssdeck size="5rem" />
              </ThemeDiv>
              <P>Abdullah Mohamed</P>
            </a>
          </Link>
        </Div1>
        <Menu>
          {({ isExpanded }) => {
            const state = isExpanded ? "open" : "closed";

            useEffect(() => {
              console.log(isExpanded);
              // if (isExpanded) {
              //   // don't use overflow-hidden, as that toggles the scrollbar and causes layout shift
              //   document.body.classList.add("fixed");
              //   document.body.classList.add("overflow-y-scroll");
              //   // alternatively, get bounding box of the menu, and set body height to that.
              //   document.body.style.height = "100vh";
              // } else {
              //   document.body.classList.remove("fixed");
              //   document.body.classList.remove("overflow-y-scroll");
              //   document.body.style.removeProperty("height");
              // }
            }, [isExpanded]);

            return (
              <div>
                <MenuButton>
                  <HamburgerIcon />
                </MenuButton>
                <AnimatePresence>
                  <MenuPopover>
                    <motion.div
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{
                        ease: "linear",
                      }}
                      style={{
                        position: "fixed",
                        top: "90px",
                        left: "0",
                        height: "100%",
                        width: "100%",
                        backgroundColor: "white",
                      }}
                    >
                      <MenuItems style={{ height: "100%", width: "100%" }}>
                        <MenuItem className={styles.menu_item}>Work</MenuItem>
                        <MenuItem className={styles.menu_item}>
                          Projects
                        </MenuItem>
                        <MenuItem className={styles.menu_item}>
                          Technologies
                        </MenuItem>
                        <MenuItem className={styles.menu_item}>About</MenuItem>
                        <MenuItem className={styles.menu_item}>
                          {getDarkModeToggle()}
                        </MenuItem>
                      </MenuItems>
                    </motion.div>
                  </MenuPopover>
                </AnimatePresence>
              </div>
            );
          }}
        </Menu>
      </SmallHeaderContainer>
      <Container>
        <Div1>
          <Link href="#" className={styles.link_name}>
            <a
              styles={{
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
