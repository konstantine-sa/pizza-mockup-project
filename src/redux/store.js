import { configureStore } from "@reduxjs/toolkit";
import pizzaFilterSlice from "./slices/pizzaFilterSlice";

export const store = configureStore({
  reducer: {
    pizzaFilter: pizzaFilterSlice,
  },
});
