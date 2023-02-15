import { configureStore } from "@reduxjs/toolkit"
import addTaskReducer from "../features/addTask/addTaskSlice"
import allTasksReducer from "../features/AllTasks/AllTasksSlice"
export default configureStore({
  reducer: {
    addTask: addTaskReducer,
    allTasks: allTasksReducer,
  },
})
