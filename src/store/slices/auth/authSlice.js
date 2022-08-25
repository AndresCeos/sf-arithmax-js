import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
    token: null,
    email: null,
    names: null,
    lastName: null,
    scdLastName: null,
    date: null,
    photoURL: null,
    errorMessage: null,
    company:null,
    phone:null,
    address:null,
    webSite:null,
    logoURL:null
  },
  reducers: {
    updateUserInfo: ( state, { payload } ) => {
      // console.log( payload )
      state.email = payload.email;
      state.names = payload.names;
      state.lastName = payload.lastName;
      state.scdLastName = payload.scdLastName;
      state.date = payload.date;
      state.company = payload.company;
      state.phone = payload.phone;
      state.address = payload.address;
      state.webSite = payload.webSite;
      state.logoURL = payload.logoURL;
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
      state.company = payload.company;
      state.phone = payload.phone;
      state.address = payload.address;
      state.webSite = payload.webSite;
      state.logoURL = payload.logoURL;
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
      state.company = null;
      state.phone = null;
      state.address = null;
      state.webSite = null;
      state.logoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkingCredentials: (state, { payload = 'checking' }) => {
      state.status = payload
    }
  }
})

export const { updateUserInfo, login, logout, checkingCredentials } = authSlice.actions