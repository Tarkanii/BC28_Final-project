import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjects,
} from "../../shared/services/projects";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getAllProjects = createAsyncThunk(
  "projects/getAll",
  async (credentials, { rejectWithValue }) => {
    console.log("dsdsa");
    try {
      const data = await getProjects();
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error);
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
      const data = await deleteProject(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getProject = createAsyncThunk(
  "projects/getProject",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await getProjectById(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
