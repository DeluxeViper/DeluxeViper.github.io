/** @format */

import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        {/* Your purpose. What you can offer to employers. */}I bring ideas into
        fruition. From Android applications to Full-Stack Web applications, and
        more.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com")}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
