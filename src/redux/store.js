import { configureStore } from "@reduxjs/toolkit";
import pizzaFilter from "./slices/pizzaFilterSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    pizzaFilter,
    cart,
  },
});
