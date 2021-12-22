import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDailyRateById } from "../../../shared/services/daily";
import {
  deleteProductItem,
  postDay,
  postDayInfo,
} from "../../../shared/services/day";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export const postDailyRate = createAsyncThunk(
  "summaries/dailyRate",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await getDailyRateById(credentials);
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error);
    }
  }
);

export const pickData = createAsyncThunk(
  "summaries/pickData",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await postDayInfo(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  "summaries/addProduct",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await postDay(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "summaries/delete",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await deleteProductItem(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const currentDate = createAsyncThunk(
//   "summaries/currentDate",
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const data = await postDay(credentials);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
