/** @format */

import React from "react";
import {
  DiFirebase,
  DiReact,
  DiMysql,
  DiSqllite,
  DiJava,
  DiAndroid,
} from "react-icons/di";
import { SiSpring, SiMongodb, SiFlutter } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { GoServer } from "react-icons/go";
import { FaVaadin } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <div style={{ height: "50px" }} />
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>Here are the technologies that I've worked with!</SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <DiReact /> React
            <br />
            <FaVaadin /> Vaadin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <GoServer size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            <SiSpring /> The Spring Framework
            <br />
            <DiJava /> J2EE
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <FiDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            <DiMysql /> MySQL
            <br />
            <DiSqllite /> SQLite
            <br />
            <DiFirebase /> Firebase Real-Time Database
            <br />
            <SiMongodb /> MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <AiOutlineMobile size="3rem" />
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            <DiAndroid /> Android
            <br />
            <SiFlutter /> Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
