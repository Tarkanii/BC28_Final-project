import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProjects,
  addProject,
  deleteProjects,
  getProject,
} from "./projects-operations";

const initialState = {
  participants: [],
  sprints: [],
  projects: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: {
    [getAllProjects.fulfilled](state, { payload }) {},
    [addProject.fulfilled](state, { payload }) {
      // state.id = payload._id;
      // state.description = payload.description;
      // state.name = payload.name;
    },
    [deleteProjects.fulfilled](state, { payload }) {
      // state.eatenProduct = state.filter(
      //   (el) => el.id !== payload.id
      // );
    },
    [getProject.fulfilled](state, { payload }) {},
  },
});

export default projectSlice.reducer;
