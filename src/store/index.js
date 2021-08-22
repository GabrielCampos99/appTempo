import { createSlice, configureStore } from "@reduxjs/toolkit";

const wheaterInitialState = { hasName: true };

const wheatherSlice = createSlice({
  name: "wheater",
  initialState: wheaterInitialState,
  reducers: {
    getCidade(state, action) {},
  },
});

const store = configureStore({
  reducer: { wheater: wheatherSlice.reducer },
});

export const wheatherActions = wheatherSlice.actions;

export default store;
