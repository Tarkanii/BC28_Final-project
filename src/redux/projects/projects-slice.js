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
    [getAllProjects.fulfilled](state, { payload }) {
      state.projects = payload;
    },
    [addProject.fulfilled](state, { payload }) {
      state.projects = [...state.projects, payload];
    },
    [deleteProjects.fulfilled](state, { payload }) {
      state.projects = state.projects.filter((el) => el._id !== payload._id);
    },
    [getProject.fulfilled](state, { payload }) {},
  },
});

export default projectSlice.reducer;
