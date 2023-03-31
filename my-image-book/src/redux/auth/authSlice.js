import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userName: null,
  userEmail: null,
  avatar: null,
  isChangeUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      const { userId, userName, userEmail, avatar, isChangeUser } = payload;
      return { ...state, userId, userName, userEmail, avatar, isChangeUser };
    },
    updateAvatar: (state, { payload }) => ({
      ...state,
      avatar: payload.avatar,
    }),
    logoutUser: () => initialState,
    // changeUser: (state, { payload }) => ({
    //   ...state,
    //   isChangeUser: payload,
    // }),
  },
});
