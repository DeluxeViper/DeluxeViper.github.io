/** @format */

import React from "react";

const WorkCard = (props) => (
  <div className="work-card-container">
    <div
      className={
        props.workItem.company === "IBM"
          ? "ibm-work-card"
          : props.workItem.company === "Amazon"
          ? "amz-work-card"
          : "work-card"
      }
    >
      <div
        className={
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
        className={
          props.workItem.company === "IBM"
            ? "ibm-work-card-info"
            : props.workItem.company === "Amazon"
            ? "amz-work-card-info"
            : "work-card-info"
        }
      >
        <div className="progress-container">
          {/* <div className="progress"></div> */}
          <span
            className="progress-text"
            style={{ position: "relative", top: "-10px" }}
          >
            {props.workItem.startDate} - {props.workItem.endDate}
          </span>
        </div>
        <h2>{props.workItem.title}</h2>
        <div className="work-description">
          <ul>
            {props.workItem.description?.map((listItem, index) => (
              <div key={`${props.workItem.id}-list-item-index-${index}`}>
                <li>
                  <h6>{listItem}</h6>
                </li>
                <div style={{ marginBottom: "15px" }} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WorkCard;
