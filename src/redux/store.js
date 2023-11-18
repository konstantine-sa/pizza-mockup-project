import { configureStore } from "@reduxjs/toolkit";
import pizzaFilterSlice from "./slices/pizzaFilterSlice";

const store = configureStore({
  reducer: {
    pizzaFilter: pizzaFilterSlice,
  },
});

export default store;
