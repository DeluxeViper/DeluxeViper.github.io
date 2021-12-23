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

const Home = () => {
  const [themeType, setThemeType] = useState("light");

  return (
    <Theme themeType={themeType}>
      <Layout>
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
