import { configureStore } from "@reduxjs/toolkit";
import manageViewReducer from "./features/ManageViews/manageViewSlice";
const store = configureStore({
  reducer: {
    manageView: manageViewReducer,
  },
});

export default store;
