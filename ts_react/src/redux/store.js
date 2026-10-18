import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";

//console.log(counterSlice.reducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
