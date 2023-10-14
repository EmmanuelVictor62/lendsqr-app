import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { allUserListType } from "@/types/type";

interface UserProps {
  users: allUserListType;
  user: {};
  loading: boolean;
  error: boolean;
  activity: boolean;
}

const initialState: UserProps = {
  users: [],
  user: {},
  loading: false,
  error: false,
  activity: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = false;
      state.activity = false;
    },
    error: (state) => {
      state.loading = false;
      state.error = true;
      state.activity = false;
    },
    activity: (state) => {
      state.loading = false;
      state.error = false;
      state.activity = true;
    },
    listAllUsers: (state, { payload }: PayloadAction<allUserListType>) => {
      state.users = payload;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loading, error, activity, listAllUsers } = userSlice.actions;
export default userSlice.reducer;
