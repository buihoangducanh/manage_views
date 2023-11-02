import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  groups: [
    {
      id: 1,
      title: "Group 1",
      description: "Description of Group 1",
      hidden: false,
      tasks: [
        { id: 1, content: "Task 1", hidden: false },
        { id: 2, content: "Task 2", hidden: true },
        { id: 12, content: "Task A", hidden: true },
        { id: 22, content: "Task B", hidden: true },

        // more tasks
      ],
    },
    {
      id: 2,
      title: "Group 2",
      description: "Description of Group 2",
      hidden: true,
      tasks: [
        { id: 3, content: "Task 3", hidden: false },
        { id: 4, content: "Task 4", hidden: true },
        { id: 5, content: "Task 5", hidden: true },
        { id: 6, content: "Task 6", hidden: true },
        // more tasks
      ],
    },
    // more groups
  ],
};

const manageViewSlice = createSlice({
  name: "manageView",
  initialState,
  reducers: {
    toggleGroupTask(state, action) {
      if (!action.payload) return;
      state.groups = state.groups.map((group) => {
        if (group.id === action.payload) {
          return {
            ...group,
            hidden: !group.hidden,
          };
        }
        return group;
      });
    },
    toggleATaskInAGroupTask(state, action) {
      if (!action.payload) return;
      state.groups.forEach((group) => {
        if (group.id === action.payload.groupId) {
          group.tasks.forEach((task) => {
            if (task.id === action.payload.taskId) {
              task.hidden = !task.hidden;
            }
          });
        }
      });
    },
  },
});

export const { toggleGroupTask, toggleATaskInAGroupTask } =
  manageViewSlice.actions;
export default manageViewSlice.reducer;
