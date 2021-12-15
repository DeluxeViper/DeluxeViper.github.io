/** @format */

import React from "react";
import { SocialIcons } from "./ProjectsStyles";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const ProjectCard = (props) => (
  <div data-aos="fade-up">
    <h2 class="project_title">{props.project.title}</h2>
    <h3 class="project_short_description">{props.project.short_description}</h3>
    <div className="project_container">
      <div className="project_img">
        <img src={props.project.image} />
      </div>
      <div className="project_description">
        <p>{props.project.description}</p>
        <div className="project_links">
          <SocialIcons target="_blank" href={props.project.code}>
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href={props.project.demo}>
            <AiOutlineLink size="4rem" />
          </SocialIcons>
        </div>
      </div>
    </div>
    <div className="project_tags">
      {props.project.tags.map((tag) => (
        <p className="project_tag">{tag}</p>
      ))}
    </div>
  </div>
);

export default ProjectCard;
