import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//5.1
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
