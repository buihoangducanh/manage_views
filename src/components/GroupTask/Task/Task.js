import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Task.scss";
const Task = ({ className }) => {
  return (
    <div className={`task ${className || ""}`}>
      <div className="task__actions">
        <PiDotsSixVerticalBold className="icons" />
        <AiOutlineEye className="icons" />
      </div>
      <div className="task__content">
        <FaCompass className="icons content-icon" />

        <div className="content-text">
          quo eius blanditiis numquam temporibus.
        </div>
      </div>
      <div className="task__edit_delete">
        <BiSolidEdit className="icons edit" />
        <RiDeleteBinLine className="icons delete" />
      </div>
    </div>
  );
};

export default Task;
