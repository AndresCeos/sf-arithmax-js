import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users/users';
import { authSlice } from './slices/auth';

const store = configureStore({
  reducer: {
    users,
    auth: authSlice.reducer
  }
});

export default store;