import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todolist/todoSlice"

export default configureStore({
    reducer: {
        todos: todosReducer,
    }
})