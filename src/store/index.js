import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import postReducer from "./reducers/posts";
import userReducer from "./reducers/users";

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    users: userReducer,
  },
});

export default store;
