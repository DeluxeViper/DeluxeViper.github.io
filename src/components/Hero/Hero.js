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
        Hi There!
      </SectionTitle>
      <SectionText>
        I excel at bringing computer & software ideas into reality.
        <br />
        <br /> From full-stack web apps, Android apps, to machine learning
        applications in IoT devices and much more.
      </SectionText>
      <Button
        target="_blank"
        onClick={() =>
          window.open("mailto:ab.tech.ventures@gmail.com", "_blank")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
