/** @format */

import React from "react";

const WorkCard = (props) => (
  <div class="work-card-container">
    <div
      class={props.workItem.company === "IBM" ? "ibm-work-card" : "work-card"}
    >
      <div
        class={
          props.workItem.company === "IBM"
            ? "ibm-work-card-preview"
            : "work-card-preview"
        }
      >
        {/* <h6>Course</h6> */}
        <h2>{props.workItem.company}</h2>
        <a>{props.workItem.location}</a>
      </div>
      <div
        class={
          props.workItem.company === "IBM"
            ? "ibm-work-card-info"
            : "work-card-info"
        }
      >
        <div class="progress-container">
          <div class="progress"></div>
          <span class="progress-text">
            {props.workItem.startDate} - {props.workItem.endDate}
          </span>
        </div>
        <h2>{props.workItem.title}</h2>
        <ul class="list">
          {props.workItem.description?.map((listItem) => (
            <div>
              <li>
                <h6>{listItem}</h6>
              </li>
              <br />
            </div>
          ))}
          {/* <li>
              <h6>
                Drove the development of transitioning a Legacy Web Application
                to a Single Page Application for the IBM Business Process
                Manager software in a Scrum environment
              </h6>
            </li>
            <br />
            <li>
              <h6>
                Developed RESTful APIs through the OpenAPI Specification and
                refactored Java EE backend logic, as well as composed DB2 SQL
                queries
              </h6>
            </li>
            <br />
            <li>
              <h6>
                Refactored and developed reliable frontend pages in React with
                Typescript, CSS from JSP, GWT pages written in Java
              </h6>
            </li> */}
        </ul>
        {/* <button class="btn">Continue</button> */}
      </div>
    </div>
  </div>
);

export default WorkCard;
