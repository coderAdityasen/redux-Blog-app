import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Features/PostSlices"

export const store = configureStore({
	reducer : postReducer
})
