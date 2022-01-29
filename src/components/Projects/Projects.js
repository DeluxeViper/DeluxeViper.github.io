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
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section>
      <span
        id="projects"
        style={{ position: "relative", top: "-130px" }}
      ></span>
      <SectionDivider />
      <br />
      <SectionTitle>Projects</SectionTitle>
      <div className="project_grid_container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
