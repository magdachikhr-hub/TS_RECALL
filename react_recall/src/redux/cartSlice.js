import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: 0,
  },
  reducers: {
    addItem: (state) => {
      state.items += 1;
    },
    removeItem: (state) => {
      if (state.items > 0) {
        state.items -= 1;
      }
    },
    clearCart: (state) => {
      state.items = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
