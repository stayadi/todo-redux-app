import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducers/todoReducers";


const store = configureStore({
    reducer:reducer
})

export default store;