import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { create, get, getAll, update, deleteData } from "../../services/posts";
import spacepark from "../../apis/spacepark";
// Get all posts from spacepark api
export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  const res = await spacepark.get("/posts");
  return res.data;
});

export const getPost = createAsyncThunk("posts/get", async ({ id }) => {
  const res = await spacepark.get(`/posts/${id}`);
  return res.data;
});

export const createPost = createAsyncThunk("posts/create", async (data) => {
  const res = await spacepark.post(`/posts`, data);
  return res.data;
});

export const updatePost = createAsyncThunk(
  "posts/update",
  async ({ id, data }) => {
    const res = await spacepark.put(`/posts/update/${id}`, data);
    return res.data;
  }
);

export const deletePost = createAsyncThunk("posts/delete", async ({ id }) => {
  const res = await spacepark.delete(`/posts/delete/${id}`);
  return res;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: { posts: [] },
  extraReducers: {
    [getAllPosts.fulfilled]: (state, action) => {
      state.posts = [action.payload.posts];
    },

    [getPost.fulfilled]: (state, action) => {
      state.posts = [action.payload.post];
    },

    [createPost.fulfilled]: (state, action) => {
      state.push(action.payload);
    },

    [updatePost.fulfilled]: (state, action) => {
      const index = state.findByIndex((post) => post.id === action.payload.id);
      state[index] = { ...state[index], ...action.payload };
    },

    [deletePost.fulfilled]: (state, action) => {
      const index = state.findByIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export default postsSlice.reducer;
