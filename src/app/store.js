import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feautres/cartSlice";
import userReducer from '../feautres/userSlice';

const store = configureStore({
  reducer: {
    allCart: cartReducer,
    user: userReducer
  },
});
export default store