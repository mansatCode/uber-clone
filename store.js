import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

// Configuring the data layer
export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});