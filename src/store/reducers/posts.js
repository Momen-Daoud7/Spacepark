import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import spacepark from "../../apis/spacepark";

// Get all posts from spacepark api
export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  const res = await spacepark.get("/posts");
  return res.data;
});

export const getPost = createAsyncThunk("posts/get", async (id) => {
  const res = await spacepark.get(`/posts/${id}`);
  return res.data;
});

export const createPost = createAsyncThunk("posts/create", async (data) => {
  const res = await spacepark.post(`/posts/create`, data);
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
      state.posts = action.payload.posts;
    },

    [getPost.fulfilled]: (state, action) => {
      state.posts = [action.payload.post];
    },

    [createPost.fulfilled]: (state, action) => {
      state.posts = [...state.posts, action.payload.post];
    },

    [updatePost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[index] = action.payload.post;
    },

    [deletePost.fulfilled]: (state, action) => {
      const index = state.posts.findIndex(({ id }) => id === action.payload.id);
      state.posts.splice(index, 1);
    },
  },
});

export default postsSlice.reducer;
