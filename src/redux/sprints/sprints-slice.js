import { createAction, createSlice } from "@reduxjs/toolkit";
import { addSprint, removeSprint, getAllSprints } from "./sprints-operations";

const initialState = {
  sprints: [],
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
    // [getAllProjects.fulfilled]: (state, { payload }) => {
    //   state.projects = payload;
    // },
    // [addProject.fulfilled]: (state, { payload }) => {
    //   state.projects = [...state.projects, payload];
    // },
    // [deleteProjects.fulfilled]: (state, { payload }) => {
    //   state.projects = state.projects.filter((el) => el._id !== payload._id);
    // },
    // [getProject.fulfilled]: (state, { payload }) => {},
  },
});

export default projectSlice.reducer;
