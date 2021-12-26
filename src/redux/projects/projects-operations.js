import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
} from "../../shared/services/projects";
import {participants, updateProjectName} from '../../shared/services/project'
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getAllProjects = createAsyncThunk(
  "projects/getAll",
  async (_,thunkAPI) => {
    const state = thunkAPI.getState();
    const userId = state.auth.userId;
    try {
      const { data } = await getProjects(userId);
      return data.data;
    } catch (error) {
      Notify.failure(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addProject = createAsyncThunk(
  "projects/add",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await createProject(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProjects = createAsyncThunk(
  "projects/delete",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await deleteProject(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProject = createAsyncThunk(
  "projects/getProject",
  async (credentials, { rejectWithValue }) => {
    try {
      const {data} = await getProjectById(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addPeople = createAsyncThunk(
  "projects/addPeople",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await participants(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const renameProject = createAsyncThunk(
  "projects/renamePeople",
  async (newValue,thunkAPI) => {
    try {
      const state = thunkAPI.getState();
    const projectId = state.projects.project._id;
      const { data } = await updateProjectName({projectId,newValue});
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);