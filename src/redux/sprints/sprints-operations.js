import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSprintById,
  getSprints,
  createSprint,
  deleteSprint,
} from "../../shared/services/sprints";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const getAllSprints = createAsyncThunk(
  "sprints",
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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await createSprint(credentials);
      return data.data;
    } catch (error) {
      return rejectWithValue(error);
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
