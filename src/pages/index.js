/** @format */

import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Theme from "../styles/theme";
import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [themeType, setThemeType] = useState("light");

  return (
    <Theme themeType={themeType}>
      <Layout>
        <div style={{ marginLeft: "48px" }}>
          <input
            className="toggle"
            type="checkbox"
            id="toggle"
            onChange={() =>
              setThemeType(themeType === "dark" ? "light" : "dark")
            }
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
              stroke={themeType === "dark" ? "white" : "black"}
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
              stroke={themeType === "dark" ? "white" : "black"}
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
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Work />
        <Projects />
        <Technologies />
        <Timeline />
        {/* <Acomplishments /> */}
      </Layout>
    </Theme>
  );
};

export default Home;
