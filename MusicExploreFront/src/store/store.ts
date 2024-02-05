import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";
// ...

export const store = configureStore({
  reducer: {
    songSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
