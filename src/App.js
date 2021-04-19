import './App.css';
import {useState} from "react";

function App() {

  const listOfToDo = [
    {
      id: 0,
      text: "Ukol 1",
      priority: 1
    },
    {
      id: 1,
      text: "Ukol 2",
      priority: 2
    },
    {
      id: 2,
      text: "Ukol 3",
      priority: 3
    },
    {
      id: 3,
      text: "Ukol 4",
      priority: 4
    },
    {
      id: 4,
      text: "Ukol 5",
      priority: 5
    }
  ]



  const [todoList, setTodoList] = useState(listOfToDo);
  const [descriptive, setDescriptive] = useState("")
  const [priority, setPriority] = useState(1)

  const newTaskHandler = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: descriptive,
      priority: priority
    }
    todoList.push(newTodo)
    todoList.sort(function (a, b) {
      return a.priority - b.priority;
    });
    setDescriptive("new Task " + todoList.length)
    setPriority(1)
  }

  const completeTaskHandler = (idTask) => {
    console.log(idTask)
    const filtered = todoList.filter(item => item.id !== idTask)
    console.log(filtered)
    filtered.sort(function (a, b) {
      return a.priority - b.priority;
    });
    console.log(filtered)
    setTodoList(filtered)
    console.log(todoList);
  }

  return (
      <div className="App">
        <div>
          New task:
          <input type={"text"} value={descriptive} onChange={(eventDesc) => setDescriptive(eventDesc.target.value)}/>
          <input type={"number"} value={priority} onChange={(eventPrio) => setPriority(eventPrio.target.value)}/>
          <button onClick={newTaskHandler}>Add</button>
        </div>
        Active tasks: {todoList.length}

        {todoList.map(item => <div>
          <div key={item.id}>{item.text +" s prioritou: " + item.priority}</div>

          <button onClick={() => {
            completeTaskHandler(item.id)
          }}>Hotovo
          </button>

        </div>)}

        <a href={"https://github.com/st52542/todolist"}>Github</a>

      </div>
  );
}

export default App;
