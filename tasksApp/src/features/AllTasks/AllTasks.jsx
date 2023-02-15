import { useState } from "react"
import { useSelector } from "react-redux"

const AllTasks = () => {
  const tasks = useSelector((state) => state.addTask)
  const { taskTitle, description } = tasks
  const [showTasks, setShowTasks] = useState(taskTitle)
  //   console.log(" Add Task State in All Tasks ", tasks.taskTitle)
  //   console.log(" Add Task State in All Tasks ", tasks.description)

  return (
    <>
      <div className="container">
        <ul>
          <li>{tasks.taskTitle}</li>
        </ul>
        {tasks.description}
      </div>
    </>
  )
}

export default AllTasks
