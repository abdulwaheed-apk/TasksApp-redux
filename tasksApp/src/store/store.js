import { configureStore } from "@reduxjs/toolkit"
import addTaskReducer from "../features/addTask/addTaskSlice"
export default configureStore({
  reducer: {
    addTask: addTaskReducer,
  },
})
