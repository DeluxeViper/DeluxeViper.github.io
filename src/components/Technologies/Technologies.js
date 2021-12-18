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
import { SiSpring, SiMongodb } from "react-icons/si";
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
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText></SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            <li>
              <DiReact /> React
            </li>
            <li>
              <FaVaadin /> Vaadin
            </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <GoServer size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            {/* Experience with <br />
            The Spring Framework, J2EE */}
            <li>
              <SiSpring /> The Spring Framework
            </li>
            <li>
              <DiJava /> J2EE
            </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <FiDatabase size="3rem" />
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            {/* SQL (MySQL, PostgreSQL, DB2, SQLite), NoSQL (Firebase RT DB,
            MongoDB) */}
            <li>
              <DiMysql /> MySQL
            </li>
            <li>
              <DiSqllite /> SQLite
            </li>
            <li>
              <DiFirebase /> Firebase Real Time Database
            </li>
            <li>
              <SiMongodb /> MongoDB
            </li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <AiOutlineMobile size="3rem" />
          <ListTitle>Others</ListTitle>
          <ListParagraph>
            <li>
              <DiAndroid /> Android
            </li>
            <li></li>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
