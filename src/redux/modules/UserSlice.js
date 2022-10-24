import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'authUser',
  initialState: {
    memberId: null,
    loginName: null,
    phoneNumber: null,
    nickname: null,
    createdAt: null,
    modifiedAt: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.memberId = action.payload.memberId;
      state.loginName = action.payload.loginName;
      state.phoneNumber = action.payload.phoneNumber;
      state.nickname = action.payload.nickname;
      state.createdAt = action.payload.createdAt;
      state.modifiedAt = action.payload.modifiedAt;
    },
    DELETE_USER: (state) => {
      state.memberId = null;
      state.loginName = null;
      state.phoneNumber = null;
      state.nickname = null;
      state.createdAt = null;
      state.modifiedAt = null;
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;
export default userSlice.reducer;
