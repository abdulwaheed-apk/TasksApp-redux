import { useState } from "react"
import { useDispatch } from "react-redux"
import { setTask } from "./addTaskSlice"

const AddTask = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")

  // console.log("-----taskTitle----", taskTitle)

  return (
    <>
      <div className="container flex flex-col pt-4 items-center justify-center w-full">
        <form
          method="post"
          onSubmit={(e) => e.preventDefault()}
          className="w-4/5"
        >
          <div>
            <label htmlFor="task-title" className="font-medium">
              Task Title
            </label>
            <input
              type="text"
              name="task-title"
              autoComplete="off"
              className="form-input rounded-lg px-4 py-3 my-2 w-full bg-black text-white border border-orange-500 focus:border-green-600 "
              placeholder="Add Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description" className="font-medium">
              Description
            </label>
            <textarea
              className="	form-textarea rounded-lg px-4 py-3 my-2 w-full bg-black text-white border border-orange-500 active:border active:border-orange-500"
              name="description"
              value={des}
              placeholder="Add description"
              onChange={(e) => setDes(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 rounded-lg border border-orange-500 text-white font-medium text-xl px-4 py-3 my-2 w-full"
            onClick={() => dispatch(setTask({ title, des }))}
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  )
}

export default AddTask
