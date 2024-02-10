import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isRegistered: false,
    user: null,
  },
  reducers: {
    loginUserAction(state, action) {
      state.isRegistered = true;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logoutUserAction(state, action) {
      state.isLoggedIn = false;
      state.user = null;
    },
    registerUserAction(state, action) {
      state.isRegistered = true;
      state.user = action.payload;
    },
  },
});

export const { loginUserAction, logoutUserAction, registerUserAction } =
  authSlice.actions;

export const authReducer = authSlice.reducer;
