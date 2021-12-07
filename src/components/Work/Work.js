/** @format */

import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./WorkStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { workExps } from "../../constants/constants";
import WorkCard from "./WorkCard";

const Work = () => (
  <Section nopadding id="work">
    <SectionDivider />
    <br />
    <SectionTitle>Where I've Worked</SectionTitle>
    <GridContainer>
      {/* {workExps.map((work) => (
        <BlogCard key={work.id}>
          <TitleContent>
            <HeaderThree title>{work.title}</HeaderThree>
          </TitleContent>
        </BlogCard>
      ))} */}
    </GridContainer>
    {workExps.map((workItem) => (
      <WorkCard workItem={workItem} />
    ))}
  </Section>
);
export default Work;
