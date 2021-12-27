import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProjects,
  addProject,
  deleteProjects,
  getProject,
  addPeople,
  renameProject
} from "./projects-operations";

const initialState = {
  projects: [],
  project: {},
  participants: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: {
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.projects = payload;
    },
    [addProject.fulfilled]: (state, { payload }) => {
      state.projects = [...state.projects, payload];
    },
    [deleteProjects.fulfilled]: (state, { payload }) => {
      state.projects = state.projects.filter((el) => el._id !== payload._id);
    },
    [getProject.fulfilled]: (state, { payload }) => {
      state.project = payload;
      state.participants = [...state.participants,...payload.participants];
    },
    [addPeople.fulfilled]: (state, { payload }) => {
      state.participants = payload.participants;
    },
    [renameProject.fulfilled]:(state, { payload }) => {
      state.project = payload;
    }
  },
});

export default projectSlice.reducer;
