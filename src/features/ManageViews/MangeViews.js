import React from "react";
import { LuScreenShare } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import Container from "../../components/Container/Container";
import GroupTask from "../../components/GroupTask/GroupTask";

import "./ManageViews.scss";
import Button from "../../components/Button/Button";
import { useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const MangeViews = () => {
  const groupTasks = useSelector((store) => store.manageView.groups);
  return (
    <div className="manage-views">
      <div className="manage-views__header">
        <LuScreenShare className="small-icon" />
        <p className="title">Manage Views</p>
        <AiOutlineClose className="small-icon close-icon" />
      </div>
      <DragDropContext>
        <Droppable droppableId="droppableId">
          {() => (
            <Container>
              {groupTasks.map((groupTask) => (
                <GroupTask groupTask={groupTask} key={groupTask.id} />
              ))}
              <div className="button-container">
                <Button className="cancel">Cancel</Button>
                <Button className="apply">Apply</Button>
              </div>
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default MangeViews;
