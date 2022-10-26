import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'authUser',
  initialState: {
    id: null,
    emailId: null,
    nickname: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.id = action.payload.id;
      state.emailId = action.payload.emailId;
      state.nickname = action.payload.nickname;
    },
    DELETE_USER: (state) => {
      state.id = null;
      state.emailId = null;
      state.nickname = null;
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;
export default userSlice.reducer;
