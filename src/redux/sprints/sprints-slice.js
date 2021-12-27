import { createAction, createSlice } from "@reduxjs/toolkit";
import { addSprint, removeSprint, getAllSprints, getSprint, renameSprint, addTask, removeTask } from "./sprints-operations";

const initialState = {
  sprints: [],
  sprint: {},
  tasks: []
};

const getSprints = createAction("projects/getProject/fulfilled");

const projectSlice = createSlice({
  name: "sprints",
  initialState,
  extraReducers: {
    [addSprint.fulfilled]: (state, { payload }) => {
      state.sprints = [...state.sprints, payload];
    },
    [removeSprint.fulfilled]: (state, { payload }) => {
      state.sprints = state.sprints.filter((item) => item._id !== payload._id);
    },
    [getSprints]: (state, { payload }) => {
      state.sprints = payload.sprints;
    },
    [getSprint.fulfilled]: (state, { payload }) => {
      state.sprint = payload
      state.tasks =payload.tasks
    },
    [getAllSprints.fulfilled]: (state, { payload }) => {
      state.sprints = payload.sprints
    },
    [renameSprint.fulfilled]: (state, { payload }) => {
      state.sprint = payload
    },
    [addTask.fulfilled]: (state, { payload }) => {
      state.tasks = [...state.tasks, payload]
    },
    [removeTask.fulfilled]: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item._id !== payload._id);
    },

  },
});

export default projectSlice.reducer;
