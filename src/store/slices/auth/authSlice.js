import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    token: null,
    email: null,
    names: null,
    lastName: null,
    scdLastName: null,
    date: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    updateUserInfo: ( state, { payload } ) => {
      // console.log( payload )
      state.email = payload.email;
      state.names = payload.names;
      state.lastName = payload.lastName;
      state.scdLastName = payload.scdLastName;
      state.date = payload.date;
    },
    login: ( state, { payload } ) => {
      // console.log( payload )
      state.status = 'authenticated';
      state.token = payload.token;
      state.email = payload.email;
      state.names = payload.names;
      state.lastName = payload.lastName;
      state.scdLastName = payload.scdLastName;
      state.date = payload.date;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: ( state, { payload } ) => {
      // console.log( payload )
      state.status = 'not-authenticated';
      state.token = null;
      state.email = null;
      state.names = null;
      state.lastName = null;
      state.scdLastName = null;
      state.date = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})

export const { updateUserInfo, login, logout, checkingCredentials } = authSlice.actions