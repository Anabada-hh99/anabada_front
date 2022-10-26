import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../modules/AuthSlice";
import userReducer from "../modules/UserSlice";
import membersPost from "../modules/membersPost";

const store = configureStore({
  reducer: { token: tokenReducer, user: userReducer, membersPost: membersPost },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
