import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSprintById,
  getSprints,
  createSprint,
  deleteSprint,
  updateSprintName,
  createTask,
  deleteTask,
} from "../../shared/services/sprints";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getAllSprints = createAsyncThunk(
  "sprints/getAll",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await getSprints(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addSprint = createAsyncThunk(
  "sprints/add",
  async (newValue, thunkAPI) => {
    const state = thunkAPI.getState();
    const projectId = state.projects.project._id;
    try {
      const { data } = await createSprint({projectId,newValue});
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeSprint = createAsyncThunk(
  "sprints/remove",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await deleteSprint(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getSprint = createAsyncThunk(
  "sprints/getSprint",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await getSprintById(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const renameSprint = createAsyncThunk(
  "projects/renamePeople",
  async (newValue,thunkAPI) => {
    try {
      const state = thunkAPI.getState();
    const sprintId = state.sprints.sprint._id;
      const { data } = await updateSprintName({sprintId,newValue});
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTask = createAsyncThunk(
  "sprints/addTask",
  async (newValue, thunkAPI) => {
    const state = thunkAPI.getState();
    const sprintId = state.sprints.sprint._id;
    try {
      const { data } = await createTask({sprintId,newValue});
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeTask = createAsyncThunk(
  "sprints/removeTask",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await deleteTask(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
