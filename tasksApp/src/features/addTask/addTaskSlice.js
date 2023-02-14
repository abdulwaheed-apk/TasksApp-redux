import { createSlice } from "@reduxjs/toolkit"

export const addTaskSlice = createSlice({
  name: "addTask",
  initialState: {
    taskTitle: "",
    description: "",
  },
  reducers: {
    setTaskTitle: (state, action) => {
      console.log("----action----", action.payload)
      state.taskTitle = action.payload.title
    },
    setDescription: (state) => {
      return state.description
    },
  },
})

export const { setTaskTitle, setDescription } = addTaskSlice.actions
export default addTaskSlice.reducer
