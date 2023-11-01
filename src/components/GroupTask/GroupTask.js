import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import "./GroupTask.scss";

const GroupTask = ({ className, children, title, detailDescription }) => {
  return (
    <div className={`group-task ${className || ""}`}>
      <div className="group-task__actions">
        <PiDotsSixVerticalBold className="icon" />
        <AiOutlineEye className="icon" />
      </div>
      <div className="group-task__description">
        <div className="title">
          <RiLuggageDepositLine className="title__icon" />
          <span className="title__text">Portfolio</span>
        </div>
        <div className="details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ea
          minus fugiat quisquam voluptatibus voluptate iure provident,
          dignissimos iusto.
        </div>
      </div>
      <div className="group-task__tasks">{children}</div>
    </div>
  );
};

export default GroupTask;
