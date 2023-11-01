import React from "react";
import { LuScreenShare } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../../components/Container/Container";
import GroupTask from "../../components/GroupTask/GroupTask";
import Task from "../../components/GroupTask/Task/Task";

import "./ManageViews.scss";

const MangeViews = () => {
  return (
    <div className="manage-views">
      <div className="manage-views__header">
        <LuScreenShare className="small-icon" />
        <p className="title">Manage Views</p>
        <AiOutlineClose className="small-icon close-icon" />
      </div>
      <Container>
        <GroupTask>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </GroupTask>
        <GroupTask>
          <Task />
          <Task />
        </GroupTask>
        <GroupTask>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </GroupTask>
      </Container>
    </div>
  );
};

export default MangeViews;
