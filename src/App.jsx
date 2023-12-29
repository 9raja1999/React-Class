import { useState } from 'react'
import Button from "./components/forms/buttons/Button.jsx";

function App() {
  const [task, setTask] = useState('')
  const [list, setList] = useState([])

  function handleChange(e) {
    setTask(e.target.value)
  }
  function addTask() {
    let newList = [...list]
    newList.push(task)
    setList(newList)
  }


  return (
    <>
      <h1>Todo App</h1>

      <input
        placeholder="Enter task"
        onChange={handleChange}
      />
      <Button title="ADD" handler={addTask} />

      <ul>
        {
          list.map((task, index) => {
            return <li key={index}>
              {task}
              <Button title="delete" />
            </li>
          })
        }
      </ul>
    </>
  )
}


export default App;