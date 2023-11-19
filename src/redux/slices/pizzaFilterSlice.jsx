import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  filterCategory: {
    id: 0,
    name: "Alle Pizzen",
  },
  sort: {
    name: "Beliebtheit",
    sortProperty: "rating",
    sortDirection: "desc",
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
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.sort.sortProperty = action.payload.sort;
    },
    setFilterCategory(state, action) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setFilters, setFilterCategory } =
  pizzaFilterSlice.actions;
export default pizzaFilterSlice.reducer;
