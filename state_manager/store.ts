import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import rootReducer from "./root_reducer";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store;
