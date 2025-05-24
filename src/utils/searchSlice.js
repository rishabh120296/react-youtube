import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",

  initialState: {
    searchCache: {
      "ip re": "iphone",
    },
  },

  reducers: {
    addTocache: (state, action) => {
      Object.assign(state.searchCache, action.payload);
    },
  },
});

export default searchSlice.reducer;
export const { addTocache } = searchSlice.actions;
