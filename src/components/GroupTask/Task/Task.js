import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import "./Task.scss";
import { useDispatch } from "react-redux";
import { toggleATaskInAGroupTask } from "../../../features/ManageViews/manageViewSlice";

const Task = ({ className, task, groupId }) => {
  const dispatch = useDispatch();

  const { hidden } = task;
  const handleToggleHidden = () => {
    dispatch(toggleATaskInAGroupTask({ groupId, taskId: task.id }));
  };
  return (
    <div className={`task ${className || ""} ${hidden && "hidden"}`}>
      <div className="task__actions">
        <PiDotsSixVerticalBold className="icons" />

        {hidden ? (
          <AiFillEyeInvisible
            className="icons toggle-hidden"
            onClick={handleToggleHidden}
          />
        ) : (
          <AiOutlineEye
            className="icons toggle-hidden"
            onClick={handleToggleHidden}
          />
        )}
      </div>
      <div className="task__content">
        <FaCompass className="icons content-icon" />
        <div className="content-text">{task.content}</div>
      </div>
      <div className="task__edit_delete">
        <BiSolidEdit className="icons edit" />
        <RiDeleteBinLine className="icons delete" />
      </div>
    </div>
  );
};

export default Task;
