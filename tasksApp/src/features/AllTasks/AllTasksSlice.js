import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

export const allTasksSlice = createSlice({
  name: "allTasks",
  initialState: {
    tasksContent: "",
  },
  reducers: {
    showTasks: (state, actions) => {
      const tasks = useSelector((state) => state.addTask)
      const { taskTitle, description } = tasks
      // code
    },
  },
})

const { showTasks } = allTasksSlice.actions
export default allTasksSlice.reducer
