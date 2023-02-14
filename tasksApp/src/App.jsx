// import "./App.css"
import AddTask from "./features/addTask/AddTask"
function App() {
  return (
    <>
      <div className="xl:container flex flex-col justify-center items-center  mt-8 py-4 m-auto h-auto">
        <h3 className="font-medium text-5xl font-sans mb-3 ">Task Manager</h3>

        <div className="bg-[#121212] rounded-2xl w-full py-6">
          <AddTask />
        </div>
        {/* <div className="bg-[#121212] rounded-2xl py-6 mx-auto my-3">
          <AllTasks taskTitle={taskTitle} description={description} />
        </div> */}
      </div>
    </>
  )
}

export default App
