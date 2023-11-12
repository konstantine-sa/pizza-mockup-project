import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "Beliebtheit",
    sortProperty: "rating",
    sortWay: "desc",
  },
};

const pizzaFilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = pizzaFilterSlice.actions;
export default pizzaFilterSlice.reducer;
