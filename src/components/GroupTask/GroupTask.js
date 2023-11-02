import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLuggageDepositLine } from "react-icons/ri";
import Task from "./Task/Task";
import "./GroupTask.scss";
import { toggleGroupTask } from "../../features/ManageViews/manageViewSlice";
import { useDispatch } from "react-redux";

const GroupTask = ({ className, groupTask }) => {
  const dispatch = useDispatch();

  const { hidden } = groupTask;

  const handleToggleVisible = () => {
    dispatch(toggleGroupTask(groupTask.id));
  };
  const { tasks: tasksList } = groupTask;

  return (
    <div className={`group-task ${className || ""}`}>
      <div className="group-task__actions">
        {!hidden && (
          <>
            <PiDotsSixVerticalBold className="icon" />
            <AiOutlineEye className="icon" onClick={handleToggleVisible} />
          </>
        )}
        {hidden && (
          <AiFillEyeInvisible className="icon" onClick={handleToggleVisible} />
        )}
      </div>
      <div className="group-task__description">
        <div className="title">
          <RiLuggageDepositLine className="title__icon" />
          <span className="title__text">{groupTask.title}</span>
        </div>
        {!hidden && <div className="details">{groupTask.description}</div>}
      </div>
      {!hidden && (
        <div className="group-task__tasks">
          {tasksList.map((task) => (
            <Task groupId={groupTask.id} key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GroupTask;
