import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./songSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./songSaga";

// ...

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: songSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
