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
  const [descriptive, setDescriptive] = useState("Ukol " + todoList.length)
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
    setDescriptive("Ukol " + todoList.length)
    setPriority(1)
  }

  const completeTaskHandler = (idEvenet) => {
    const changed = todoList.filter(event => event.id !== idEvenet)
    changed.sort(function (a, b) {
      return a.priority - b.priority;
    });
    setTodoList(changed)
  }

  return (
      <div className="App">
        <div style={{
          width: "20%",
          border:"1px solid black",
          display: "flex",
          margin:"auto"
        }}>
          New task:
          <input type={"text"} value={descriptive} onChange={(eventDesc) => setDescriptive(eventDesc.target.value)}/>
          <input type={"number"} value={priority} onChange={(eventPrio) => setPriority(eventPrio.target.value)}/>
          <button onClick={newTaskHandler}>Add</button>
        </div>
        Active tasks: {todoList.length}
        {todoList.map(event => <div style={{
          width: "95%",
          border:"1px solid black",
          display: "flex",
          flexDirection:"column",
          margin:"auto",
          padding:"10px"
        }}>
          <div key={event.id} style={{
            width: "10%"
          }}>{event.text +" s prioritou: " + event.priority}</div>
          <button onClick={() => {
            completeTaskHandler(event.id)
          }} style={{
            width: "20%",
            height: "20%",
            marginLeft:"auto"
                      }}>Hotovo
          </button>

        </div>)}

        <a href={"https://github.com/st52542/todolist"}>Github Link</a>

      </div>
  );
}

export default App;
