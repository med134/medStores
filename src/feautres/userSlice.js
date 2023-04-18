import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const initialState = {
  userName: null,
  userEmail: null,
  userPic:null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveState: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPic = action.payload.userPic;
    },
    setLogOut: (state) => {
      state.userName = null;
      state.userEmail = null;
      state.userPic =null;
    },
  },
   
});

export const { setActiveState, setLogOut} = userSlice.actions;
export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const selectUserPic = (state) => state.user.userPic;
export default userSlice.reducer;
