import { createSlice } from "@reduxjs/toolkit";
import { addSprint, removeSprint } from "./sprints-operations";

const initialState = {
  items: [],
};

const projectSlice = createSlice({
  name: "sprints",
  initialState,
  extraReducers: {
    [addSprint.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    [removeSprint.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload._id);
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
