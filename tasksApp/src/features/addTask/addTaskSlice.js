import { createSlice } from "@reduxjs/toolkit"

export const addTaskSlice = createSlice({
  name: "addTask",
  initialState: {
    taskTitle: "",
    description: "",
  },
  reducers: {
    setTask: (state, action) => {
      // console.log("----action----", action.payload)
      state.taskTitle = action.payload.title
      state.description = action.payload.des
      // console.log("----task title----", state.taskTitle)
      // console.log("----Description----", state.description)
    },
  },
})

export const { setTask } = addTaskSlice.actions
export default addTaskSlice.reducer
