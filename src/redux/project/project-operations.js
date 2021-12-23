import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProjects,
  getProjectById,
  postProject,
  deleteProject,
  updateMembers,
  updateProjectName,
} from "../../shared/services/project";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const getAll = createAsyncThunk(
  "projects/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllProjects();
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const getProject = createAsyncThunk(
  "projects/getProject",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await getProjectById(credentials);
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error);
    }
  }
);

const addProject = createAsyncThunk(
  "projects/addProject",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await postProject(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const removeProject = createAsyncThunk(
  "projects/removeProject",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await deleteProject(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const changeProjectName = createAsyncThunk(
  "projects/changeProjectName",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await updateProjectName(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const addMember = createAsyncThunk(
  "projects/addMember",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await updateMembers(credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const projectOperations = {
  getAll,
  getProject,
  addProject,
  removeProject,
  addMember,
  changeProjectName,
};
export default projectOperations;
