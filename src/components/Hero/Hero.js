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
        {/* Your purpose. What you can offer to employers. */}I enjoy bringing
        ideas into reality. From Android applications to Full-Stack Web
        applications, and more.
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
