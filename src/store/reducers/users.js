import _ from "lodash";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import spacepark from "../../apis/spacepark";

export const getAllUsers = createAsyncThunk("users/getAll", async () => {
  const res = await spacepark.get("/users");
  return res.data;
});

export const getUser = createAsyncThunk("users/getUser", async (id) => {
  const res = await spacepark.get(`/users/${id}`);
  return res.data;
});

export const createUser = createAsyncThunk("users/create", async (data) => {
  const res = await spacepark.post("/users/create", data);
  return res.data;
});

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const res = await spacepark.put(`/users/update/${id}`, data);
    return res.data;
  }
);

export const deleteUser = createAsyncThunk("users/delete", async (id) => {
  const res = await spacepark.delete(`/users/delete/${id}`);
  return res.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { users: [] },
  extraReducers: {
    [getAllUsers.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.users = action.payload.users;
    },
    [getUser.fulfilled]: (state, action) => {
      state.users = [action.payload.user];
    },
    [createUser.fulfilled]: (state, action) => {
      state.users.push(action.payload.user);
    },
    [updateUser.fulfilled]: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.user.id
      );
      state.users[index] = action.payload.user;
    },
    [deleteUser.fulfilled]: (state, action) => {
      const index = state.users.findIndex(({ id }) => id === action.payload.id);
      state.users.splice(index, 1);
    },
  },
});

export default userSlice.reducer;
