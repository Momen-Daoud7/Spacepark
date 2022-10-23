import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import spacepark from "../../apis/spacepark";

export const register = createAsyncThunk("auth/register", async (data) => {
  const res = await spacepark.post("/auth/register", data);
  // store token in local storage
  localStorage.setItem("userInfo", {
    ...res.data.user,
    userToken: res.data.token,
  });
  return res.data;
});

export const login = createAsyncThunk("auth/login", async (data) => {
  const res = await spacepark.post("/auth/login", data);

  // store token in local storage
  localStorage.setItem(
    "userInfo",
    JSON.stringify({ ...res.data.user, token: res.data.token })
  );
  return res.data;
});

// init userToken value from localStorage
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  userInfo,
  userToken: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = { ...payload.user, userToken: payload.token };
    },
    [register.rejected]: (state) => {
      state.success = false;
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = { ...payload.user, userToken: payload.token };
      state.userToken = payload.token;
    },
    [login.rejected]: (state) => {
      state.success = false;
    },
  },
});

export default authSlice.reducer;
