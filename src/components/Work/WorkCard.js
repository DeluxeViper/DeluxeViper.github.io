/** @format */

import React from "react";

const WorkCard = (props) => (
  <div class="work-card-container">
    <div
      class={
        props.workItem.company === "IBM"
          ? "ibm-work-card"
          : props.workItem.company === "Amazon"
          ? "amz-work-card"
          : "work-card"
      }
    >
      <div
        class={
          props.workItem.company === "IBM"
            ? "ibm-work-card-preview"
            : props.workItem.company === "Amazon"
            ? "amz-work-card-preview"
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
            : props.workItem.company === "Amazon"
            ? "amz-work-card-info"
            : "work-card-info"
        }
      >
        <div class="progress-container">
          {/* <div class="progress"></div> */}
          <span
            class="progress-text"
            style={{ position: "relative", top: "-10px" }}
          >
            {props.workItem.startDate} - {props.workItem.endDate}
          </span>
        </div>
        <h2>{props.workItem.title}</h2>
        <div class="work-description">
          <ul>
            {props.workItem.description?.map((listItem) => (
              <div>
                <li>
                  <h6>{listItem}</h6>
                </li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WorkCard;
