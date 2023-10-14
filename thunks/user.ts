import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { listAllUsers, loading, error } from "@/slices/user";

const client = axios.create({
  baseURL: "http://localhost:3001/users",
});

export const listAllUsersThunk = createAsyncThunk(
  "users/listAllUsers",
  async (_, { dispatch }) => {
    try {
      dispatch(loading());

      const response = await client.get("?_limit=10");

      const data = response.data;

      dispatch(listAllUsers(data));
    } catch {
      dispatch(error());
    }
  }
);
